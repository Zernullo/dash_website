/**
 * 🔧 THE TOOLBOX
 * Helper functions we use everywhere:
 * - formatDate() → "Jan 1, 2023"
 * - shortenText() → "Hello..."
 * - capitalize() → "First letter big"
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}