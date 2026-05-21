# Plan: Remove Candidate Portrait from Hero Section

The objective is to remove the candidate's portrait photo from the Hero section while maintaining the overall campaign aesthetic and ensuring the layout remains visually appealing.

## 1. Hero Section Modification
*   **File**: `src/components/sections/Hero.tsx`
*   **Action**: Remove the `motion.div` containing the candidate's portrait and the associated decorative accent light.
*   **Layout Adjustment**: 
    *   Transition the hero content from a two-column grid to a centered single-column layout.
    *   Update the background overlay to a more balanced dark gradient to ensure text readability across the entire hero section now that the text is centered.
    *   Slightly increase the font size and spacing for the centered text to fill the visual space effectively.

## 2. Verification
*   Confirm the portrait image is removed.
*   Verify the candidate's name, tagline, and CTA buttons are correctly centered and legible.
*   Ensure the background rally image remains visible but properly darkened for contrast.
*   Run `validate_build` to ensure no errors were introduced.
