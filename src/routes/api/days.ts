import { createFileRoute } from "@tanstack/react-router";
import { englishToNepali } from "@/lib/date_helper";
import {
  calculateNepaliYearProgress,
  generateDotsGridJSON,
} from "@/lib/generator";
import {
  createOgImageResponse,
  getCurrentDateInNepal,
  getSecondsUntilNepalMidnight,
  imageGenerationErrorResponse,
  invalidDimensionsResponse,
  parseDimensionsFromRequestUrl,
  withEdgeCache,
} from "@/lib/og_image";

export const Route = createFileRoute("/api/days")({
  server: {
    handlers: {
      GET: ({ request }) =>
        withEdgeCache(request, async () => {
          try {
            const dimensions = parseDimensionsFromRequestUrl(request.url);
            if (!dimensions) return invalidDimensionsResponse();

            const { width, height } = dimensions;
            const currentDateInNepal = getCurrentDateInNepal();
            const nepaliDate = englishToNepali(currentDateInNepal);

            const progress = calculateNepaliYearProgress(nepaliDate);
            const gridResult = generateDotsGridJSON(
              progress,
              nepaliDate,
              width,
              height,
            );

            const secondsUntilMidnight =
              getSecondsUntilNepalMidnight(currentDateInNepal);

            return await createOgImageResponse(
              gridResult,
              width,
              height,
              secondsUntilMidnight,
            );
          } catch (error) {
            return imageGenerationErrorResponse(error);
          }
        }),
    },
  },
});
