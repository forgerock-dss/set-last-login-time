/**
 * @file Script to store the last login time of a user on successful AuthN
 * @version 0.1.0
 * @keywords authN lastLoginTime ISO8601
 * @license
 * DISCLAIMER: The sample code described herein is provided on an "as is" basis, without warranty of any kind, to the fullest extent permitted by law. ForgeRock does not warrant or guarantee the individual success developers may have in implementing the sample code on their development platforms or in production configurations. ForgeRock does not warrant, guarantee or make any representations regarding the use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. ForgeRock disclaims all warranties, expressed or implied, and in particular, disclaims all warranties of merchantability, and warranties related to the code, or any service or software related thereto.
 * ForgeRock shall not be liable for any direct, indirect or consequential damages or costs of any type arising out of any action taken by you or others related to the sample code.
 */

/**
 * Script configuration
*/
var config = {
    /**
     * @property {string} nodeName - The name of the executing node, used for logging
     * @property {string} lastLoginAttribute - The name of attribute used to the store the last login timestamp of a user
     */
    lastLoginAttribute: "frUnindexedDate1",
    nodeName: "***last-login-time"
};

/**
 * Enum Pass or Fail outcomes
 * @readonly
 * @enum {number}
 */
var nodeOutcome = {
    PASS: "Success"
};

/**
 * Add the node info prefix to a log message
 * @param {string} message - the message body
 * @returns a tagged version of the message
 */
 function tag(message) {
    return "***".concat(config.nodeName).concat(": ").concat(message);
}

/**
 * Node entry point
 */
logger.message(tag("Node executing"));
var dateTime = new Date().toISOString();
sharedState.get("objectAttributes").put(config.lastLoginAttribute, dateTime);
logger.message(tag("User object attributes updated to populate " + config.lastLoginAttribute + " with this date: " + dateTime));
outcome = nodeOutcome.PASS;