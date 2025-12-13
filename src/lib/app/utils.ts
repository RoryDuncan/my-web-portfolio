/**
 * Creates a debouncer object that debounces calls to its `run` method.
 *
 * @param delay The debounce delay in milliseconds.
 * @returns An object with `run` and `cancel` methods.
 */
export function createDebouncer(delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return {
    /**
     * Schedules a function to run after the specified delay, cancelling any previously scheduled run.
     * @param fn The function to execute after the debounce period.
     */
    run: (fn: () => void) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fn, delay);
    },
    /**
     * Cancels the pending debounced function call.
     */
    cancel: () => {
      clearTimeout(timeoutId);
    },
  };
}
