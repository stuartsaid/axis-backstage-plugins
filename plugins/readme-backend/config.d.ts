export interface Config {
  /**
   * Configuration options for the Readme backend plugin
   */
  readme?: {
    /**
     * Optional list of file names to try. Specifies the file names to try
     * when looking for a README file and which order to use.
     */
    fileNames?: string[];
    /**
     * Optional TTL (time to live) value for the caching of readme file contents.
     * If not provided, defaults to 1 hour. The value should be specified in hours.
     */
    cacheTTLHours?: number;
  };
}
