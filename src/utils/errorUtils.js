/**
 * Utility class to help parse JSON error responses into corresponding error arrays
 */
class ErrorParser {
  constructor(errorJSON, keyToArrMap) {
    this.errorJSON = errorJSON;
    this.keyToArrMap = keyToArrMap;
  }

  /**
   * Append error to given array if the error string is found as a key in the error map
   * @param {Object} errorMap
   * @param {String} errorString
   * @param {Array} errorArray
   */
  _appendErrorIfMatched = (errorMap, errorString, errorArray) => {
    Object.keys(errorMap).forEach(key => {
      if (key === errorString) errorArray.push(errorMap[key]);
    });
  };

  /**
   * Loop through array of errors for a given key *eg 'email'* and
   * attempt to match the error strings to results in the given error map
   * @param {String} key
   * @param {Array} errorArray
   * @param {Object} errorMap
   */
  _iterateThroughErrorArray(key, errorArray, errorMap) {
    const errorMapForKey = errorMap[key];

    errorArray.forEach((_, idx) => {
      this._appendErrorIfMatched(
        errorMapForKey,
        errorArray[idx],
        this.keyToArrMap[key]
      );
    });
  }

  /**
   *
   * @param {object} errorMap The object representing the map between different error keys and strings
   * and the corresponding messages to be displayed to the user. e.g.
   * ```
   * const map = {
   *    "email": {
   *        "This field is required": "Email is required"
   *    }
   * }
   * ```
   */
  parse(errorMap) {
    Object.keys(this.errorJSON).forEach(key => {
      const errorArray = this.errorJSON[key];
      this._iterateThroughErrorArray(key, errorArray, errorMap);
    });
  }
}

export { ErrorParser };
