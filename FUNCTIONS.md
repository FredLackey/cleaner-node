## Cleaner Node Functions

<dl>
<dt><a href="#addDays">addDays(value, quantity)</a> ⇒ <code>Date</code> | <code>undefined</code></dt>
<dd><p>Adds a specified number of days to a date.</p>
</dd>
<dt><a href="#addMinutes">addMinutes(value, quantity)</a> ⇒ <code>Date</code> | <code>undefined</code></dt>
<dd><p>Adds a specified number of minutes to a date.</p>
</dd>
<dt><a href="#sortAscending">sortAscending(numbers)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Sorts an array of numbers in ascending order.</p>
</dd>
<dt><a href="#cleanAlphanumeric">cleanAlphanumeric(value)</a> ⇒ <code>string</code></dt>
<dd><p>Removes all characters from a string except for letters and numbers.</p>
</dd>
<dt><a href="#cleanDigits">cleanDigits(value)</a> ⇒ <code>string</code></dt>
<dd><p>Removes all non-digit characters from a string.</p>
</dd>
<dt><a href="#removeId">removeId(item, params)</a></dt>
<dd><p>Removes the ID property from an object if the UID property exists (or if force is true).</p>
</dd>
<dt><a href="#removeAudit">removeAudit(item, params)</a></dt>
<dd><p>Removes audit trail properties (specified in params.audit) from an object.</p>
</dd>
<dt><a href="#moveUid">moveUid(item, params)</a></dt>
<dd><p>Moves the value from the UID property to the ID property if the ID property is missing.</p>
</dd>
<dt><a href="#moveIds">moveIds(item, params)</a></dt>
<dd><p>Renames properties ending with &#39;-uid&#39; or &#39;_uid&#39; to the corresponding key without the suffix.</p>
</dd>
<dt><a href="#trimIds">trimIds(item, params)</a></dt>
<dd><p>Renames properties ending with &#39;-id&#39;, &#39;_id&#39;, &#39;-uid&#39;, or &#39;_uid&#39; to the base key.</p>
</dd>
<dt><a href="#removeNulls">removeNulls(item, params)</a></dt>
<dd><p>Removes properties with null values from an object unless params.nulls is true.</p>
</dd>
<dt><a href="#processItems">processItems(items, params)</a></dt>
<dd><p>Recursively processes an array of items or nested arrays.</p>
</dd>
<dt><a href="#processItem">processItem(item, params)</a></dt>
<dd><p>Processes a single item object: removes IDs, audits, handles UIDs, trims IDs, removes nulls, and recurses into nested objects/arrays.</p>
</dd>
<dt><a href="#cleanDto">cleanDto(itemOrItems, [params])</a></dt>
<dd><p>Cleans a DTO (Data Transfer Object) or an array of DTOs by applying various transformations like removing audit fields, handling ID/UID properties, and removing nulls.
This function modifies the input object(s) in place.</p>
</dd>
<dt><a href="#cleanString">cleanString(value, [valid], [invalid], [isCaseSensitive])</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Cleans a string by keeping only specified valid characters and removing specified invalid characters.</p>
</dd>
<dt><a href="#copyContents">copyContents(sourceFile, destinationFile)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Asynchronously copies the contents of a source file to a destination file, line by line.
Uses OS-specific end-of-line characters.</p>
</dd>
<dt><a href="#copyFile">copyFile(sourcePath, targetPath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Synchronously copies a file from a source path to a target path.</p>
</dd>
<dt><a href="#copyObject">copyObject(item)</a> ⇒ <code>object</code></dt>
<dd><p>Creates a deep copy of an object using JSON stringification and parsing.
Note: This method does not handle non-JSON-serializable values like functions, Dates, or undefined.</p>
</dd>
<dt><a href="#createPath">createPath(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Creates a directory path recursively if it doesn&#39;t already exist.</p>
</dd>
<dt><a href="#deleteDirectory">deleteDirectory(folderPath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Synchronously deletes a directory and its contents recursively.
Uses the rimraf package.</p>
</dd>
<dt><a href="#deleteFile">deleteFile(filePath, [missingOkay])</a> ⇒ <code>boolean</code></dt>
<dd><p>Synchronously deletes a file.</p>
</dd>
<dt><a href="#sortDescending">sortDescending(numbers)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Sorts an array of numbers in descending order.</p>
</dd>
<dt><a href="#getVars">getVars()</a> ⇒ <code>object</code></dt>
<dd><p>Retrieves environment variables from process.env.
Filters for keys that are all uppercase and have string, number, or boolean values.
Sorts the keys alphabetically.</p>
</dd>
<dt><a href="#findAllUids">findAllUids(itemOrItems)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Finds all unique strings matching the UID format (e.g., &#39;xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#39;) 
within an object or array, including nested structures.</p>
</dd>
<dt><a href="#fromDto">fromDto(itemOrItems, [params])</a></dt>
<dd><p>Converts specific string representations within a DTO (or array of DTOs) to their corresponding JavaScript types (e.g., ISO date strings to Date objects).
This function modifies the input object(s) in place.
NOTE: The conversion of digit strings to Dates via <code>Date(item[key])</code> in <code>makeIntegers</code> seems incorrect and likely should convert to Numbers.</p>
</dd>
<dt><a href="#fromEpoch">fromEpoch(value)</a> ⇒ <code>Date</code> | <code>null</code></dt>
<dd><p>Converts a Unix epoch timestamp (seconds since Jan 1, 1970) to a JavaScript Date object.
Handles both number and string representations of the epoch time.</p>
</dd>
<dt><a href="#fromIsoDate">fromIsoDate(value)</a> ⇒ <code>Date</code> | <code>null</code></dt>
<dd><p>Converts an ISO 8601 date string to a JavaScript Date object.</p>
</dd>
<dt><a href="#fromResult">fromResult(item)</a> ⇒ <code>any</code></dt>
<dd><p>Extracts the nested &#39;result&#39; property from an object, traversing down until a non-object &#39;result&#39; is found or the property doesn&#39;t exist.
Useful for unwrapping nested API responses.</p>
</dd>
<dt><a href="#fromShortDate">fromShortDate(value, [allowFuture], [earliestYear])</a> ⇒ <code>Date</code> | <code>null</code></dt>
<dd><p>Converts a short date string (YYYY-MM-DD or YYYY/MM/DD) to a JavaScript Date object.
Note: The <code>allowFuture</code> and <code>earliestYear</code> parameters are currently unused in the function body, although they are present in the signature of the imported <code>isShortDate</code>.</p>
</dd>
<dt><a href="#getArrayCount">getArrayCount(value)</a> ⇒ <code>number</code></dt>
<dd><p>Gets the length of an array.
Handles non-array inputs gracefully.</p>
</dd>
<dt><a href="#getBlockDate">getBlockDate([value], [format])</a> ⇒ <code>string</code></dt>
<dd><p>Formats a Date object into a blockdate string (e.g., YYYYMMDDHHmmssSSS).</p>
</dd>
<dt><a href="#getBody">getBody(req)</a> ⇒ <code>Promise.&lt;object&gt;</code></dt>
<dd><p>Asynchronously extracts the request body from a request object (req).
Primarily designed for Next.js environments, falling back to <code>req.body</code> if present.
Logs an error and returns an empty object if the request object is invalid.</p>
</dd>
<dt><a href="#getBracket">getBracket(value)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>Finds the matching bracket pair (e.g., { open: &#39;(&#39;, close: &#39;)&#39; }) from a predefined list 
(<code>constants.BRACKETS</code>) that encloses the given string value.</p>
</dd>
<dt><a href="#getBaseDir">getBaseDir(values)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Finds the longest common base directory path from an array of file paths.
Ensures all paths share the same root directory before finding the common subdirectory path.
Handles different path separators (Windows/Unix).</p>
</dd>
<dt><a href="#getDayName">getDayName(date)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Gets the full name of the day of the week (e.g., &#39;Sunday&#39;, &#39;Monday&#39;) for a given Date object or ISO date string.</p>
</dd>
<dt><a href="#getDuration">getDuration(start, end)</a> ⇒ <code>object</code></dt>
<dd><p>Calculates the duration between two timestamps (or Date objects) and formats it.</p>
</dd>
<dt><a href="#getEmail">getEmail(value)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Extracts the first valid email address found in a string.</p>
</dd>
<dt><a href="#getEmails">getEmails(value)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Extracts all valid email addresses found in a string using a regular expression.</p>
</dd>
<dt><a href="#getFileContents">getFileContents(filePath, [options], [format])</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Synchronously reads the contents of a file.</p>
</dd>
<dt><a href="#getFileName">getFileName(filePath, [includeExtension])</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extracts the file name from a file path, optionally including or excluding the extension.</p>
</dd>
<dt><a href="#getFileSize">getFileSize(filePath)</a> ⇒ <code>number</code></dt>
<dd><p>Gets the size of a file in bytes.</p>
</dd>
<dt><a href="#getFiles">getFiles(folderPath)</a> ⇒ <code>Array.&lt;string&gt;</code> | <code>null</code></dt>
<dd><p>Synchronously reads the contents of a directory and returns an array of full paths for its direct children (files and subdirectories).</p>
</dd>
<dt><a href="#getFirst">getFirst(value, [trim])</a> ⇒ <code>any</code> | <code>string</code> | <code>undefined</code></dt>
<dd><p>Gets the first element of an array or the first character of a string.
Optionally trims the string before extracting the first character.</p>
</dd>
<dt><a href="#getFolderContents">getFolderContents(folderPath)</a> ⇒ <code>Array.&lt;string&gt;</code> | <code>undefined</code></dt>
<dd><p>Synchronously reads the contents of a directory and returns an array of full paths for its direct children.
Similar to <code>getFiles</code>, but returns <code>undefined</code> instead of <code>null</code> on error or invalid input.</p>
</dd>
<dt><a href="#getHash">getHash(value)</a> ⇒ <code>string</code></dt>
<dd><p>Calculates the MD5 hash of a given string value.</p>
</dd>
<dt><a href="#getId">getId(itemOrId)</a> ⇒ <code>string</code> | <code>number</code> | <code>undefined</code></dt>
<dd><p>Extracts an ID from an item.
If the input is already a string or number, it&#39;s returned directly.
If the input is an object, it looks for properties named &#39;id&#39; or &#39;_id&#39; (in that order)
and returns the value if it&#39;s a string or number.
Operates on a deep copy of the object to avoid side effects.</p>
</dd>
<dt><a href="#getInnerTokens">getInnerTokens(str, bracket)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extracts the innermost content enclosed by a specified pair of opening and closing brackets/tokens.
Handles nested brackets correctly.</p>
</dd>
<dt><a href="#getLast">getLast(value, [trim])</a> ⇒ <code>any</code> | <code>string</code> | <code>undefined</code></dt>
<dd><p>Gets the last element of an array or the last character of a string.
Optionally trims the string before extracting the last character.</p>
</dd>
<dt><a href="#getMax">getMax(values)</a> ⇒ <code>number</code> | <code>string</code> | <code>null</code></dt>
<dd><p>Finds the maximum numeric value in an array.
Filters out non-numeric values before comparison.
Handles both number primitives and string representations of numbers.</p>
</dd>
<dt><a href="#getMin">getMin(values)</a> ⇒ <code>number</code> | <code>string</code> | <code>null</code></dt>
<dd><p>Finds the minimum numeric value in an array.
Filters out non-numeric values before comparison.
Handles both number primitives and string representations of numbers.</p>
</dd>
<dt><a href="#getPadPrefix">getPadPrefix(value)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Gets the leading whitespace (prefix padding) of a string.
Returns null if the input is not a valid string (empty string is okay).
Returns an empty string if there is no leading whitespace.
Otherwise, returns a string consisting of spaces matching the length of the leading whitespace.</p>
</dd>
<dt><a href="#getPadSuffix">getPadSuffix(value)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Gets the trailing whitespace (suffix padding) of a string.
Returns null if the input is not a valid string (empty string is okay).
Returns an empty string if there is no trailing whitespace.
Otherwise, returns a string consisting of spaces matching the length of the trailing whitespace.</p>
</dd>
<dt><a href="#getPads">getPads(line)</a> ⇒ <code>object</code> | <code>number</code> | <code>number</code></dt>
<dd><p>Calculates the length of leading (prefix) and trailing (suffix) whitespace in a string.</p>
</dd>
<dt><a href="#getSingle">getSingle(value)</a> ⇒ <code>*</code></dt>
<dd><p>Returns the first element of an array if it contains exactly one element, otherwise returns undefined.</p>
</dd>
<dt><a href="#getStringSize">getStringSize(value, [encoding])</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the byte size of a string using the specified encoding.</p>
</dd>
<dt><a href="#getSubstring">getSubstring(values, [isCaseSensitive])</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Finds the longest common starting substring among an array of strings.</p>
</dd>
<dt><a href="#getTokenizedSegments">getTokenizedSegments(str, brackets)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Extracts segments from a string that are enclosed by specified opening and closing brackets.
Only top-level (non-nested) segments are returned.</p>
</dd>
<dt><a href="#getUid">getUid(itemOrId, [strict])</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Extracts a UID (or optionally a GUID) from an item or returns the input if it&#39;s already a valid UID/GUID format.
Checks for a <code>uid</code> property within an object if the input is an object.</p>
</dd>
<dt><a href="#getVars">getVars([proper], [valid])</a> ⇒ <code>object</code></dt>
<dd><p>Retrieves environment variables, optionally filtering for proper naming conventions and valid value types.</p>
</dd>
<dt><a href="#hasString">hasString(value, target, [isCaseSensitive])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string contains a target substring, with optional case sensitivity.</p>
</dd>
<dt><a href="#hashFileContents">hashFileContents(value, [trim], [algorithm], [digest])</a> ⇒ <code>Promise.&lt;(string|null|undefined)&gt;</code></dt>
<dd><p>Computes a hash of the file contents.</p>
</dd>
<dt><a href="#hashFile">hashFile(value, [algorithm], [digest])</a> ⇒ <code>string</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Computes a hash of a file&#39;s contents synchronously.</p>
</dd>
<dt><a href="#hashLines">hashLines(lines, [trim])</a> ⇒ <code>string</code></dt>
<dd><p>Computes a hash of an array of lines (strings, numbers, or booleans).
Filters out invalid entries, converts numbers/booleans to strings, optionally trims whitespace from each line, joins them into a single string, and then hashes the result using <code>hashString</code> (defaulting to md5/hex).</p>
</dd>
<dt><a href="#hashString">hashString(value)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Computes a hash (md5/hex by default) of a string after trimming leading/trailing whitespace.</p>
</dd>
<dt><a href="#hash">hash(value, salt, [hmacOption], [digestOption])</a> ⇒ <code>string</code></dt>
<dd><p>Computes an HMAC hash of a value using a salt.</p>
</dd>
<dt><a href="#removeBlankContentType">removeBlankContentType(headers)</a></dt>
<dd><p>Removes the Content-Type header if its value is not a valid, non-empty string.
Modifies the headers object in place.</p>
</dd>
<dt><a href="#toUrl">toUrl([value])</a> ⇒ <code>string</code></dt>
<dd><p>Converts a value into a full URL string, ensuring it starts with http:// or https://.
Removes leading/trailing slashes before prefixing with http:// if necessary.</p>
</dd>
<dt><a href="#toBody">toBody(value)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Converts a value to a string suitable for an HTTP request body.
Stringifies objects, passes through strings, returns undefined otherwise.</p>
</dd>
<dt><a href="#addHeaders">addHeaders([creds], [headers])</a> ⇒ <code>object</code></dt>
<dd><p>Merges default headers, provided headers, and adds Authorization headers based on credentials.
Ensures Content-Type is set if not provided or blank.</p>
</dd>
<dt><a href="#doPromise">doPromise(options)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>Performs a fetch request with the specified options.
Handles URL formatting, body conversion, and header generation.</p>
</dd>
<dt><a href="#doGet">doGet(url, [creds], [headers])</a> ⇒ <code>Promise.&lt;(*|null)&gt;</code></dt>
<dd><p>Performs a GET request.</p>
</dd>
<dt><a href="#doPost">doPost(url, data, [creds], [headers])</a> ⇒ <code>Promise.&lt;(*|null)&gt;</code></dt>
<dd><p>Performs a POST request.</p>
</dd>
<dt><a href="#doPut">doPut(url, data, [creds], [headers])</a> ⇒ <code>Promise.&lt;(*|null)&gt;</code></dt>
<dd><p>Performs a PUT request.</p>
</dd>
<dt><a href="#doDelete">doDelete(url, [data], [creds], [headers])</a> ⇒ <code>Promise.&lt;(*|null)&gt;</code></dt>
<dd><p>Performs a DELETE request.</p>
</dd>
<dt><a href="#ping">ping([creds], [headers])</a> ⇒ <code>Promise.&lt;(*|string)&gt;</code></dt>
<dd><p>Performs a GET request to the root path (&#39;/&#39;) to check connectivity.</p>
</dd>
<dt><a href="#initArray">initArray(value)</a> ⇒ <code>Array.&lt;*&gt;</code></dt>
<dd><p>Ensures the input value is an array and filters out undefined elements.
If the input is not an array, it wraps it in an array.</p>
</dd>
<dt><a href="#isAlpha">isAlpha(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string contains only alphabetic characters (a-z, case-insensitive).</p>
</dd>
<dt><a href="#isAlphanumeric">isAlphanumeric(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string contains only alphanumeric characters (a-z, 0-9, case-insensitive).</p>
</dd>
<dt><a href="#isAsync">isAsync(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is an async function.</p>
</dd>
<dt><a href="#isBooleanIfSet">isBooleanIfSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is either not set (null or undefined) or is a boolean (true or false).
Useful for optional boolean parameters.</p>
</dd>
<dt><a href="#isBoolean">isBoolean(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is strictly true or false.</p>
</dd>
<dt><a href="#isBracketted">isBracketted(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string starts with an opening bracket (&#39;(&#39;, &#39;[&#39;, &#39;{&#39;) and ends with the corresponding closing bracket.
Uses <code>getBracket</code> to determine the bracket pair.</p>
</dd>
<dt><a href="#isCamelCase">isCamelCase(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is in camelCase format.
It verifies this by converting the string to camelCase and comparing it to the original.</p>
</dd>
<dt><a href="#isCaps">isCaps(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is entirely uppercase.
The string must be non-empty and valid.</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a valid JavaScript Date object.
Verifies that the value is an object, an instance of Date, and does not represent an invalid date (e.g., NaN time).</p>
</dd>
<dt><a href="#isDefined">isDefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is defined (i.e., not <code>undefined</code>).</p>
</dd>
<dt><a href="#isDeleted">isDeleted(item, fn)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if an item is considered &quot;deleted&quot; based on a provided checking function.
Throws an error if the provided checker <code>fn</code> is not a function.
Returns false if the item is not an object.
Otherwise, returns the result of calling the checker function <code>fn</code> with the item.</p>
</dd>
<dt><a href="#isDigits">isDigits(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string contains only numeric digits (0-9).
The string must be a valid, non-empty string.</p>
</dd>
<dt><a href="#isEmail">isEmail(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is a valid email address format.
It uses <code>getEmail</code> to potentially clean the input and then compares it to the original value.</p>
</dd>
<dt><a href="#isEqualDate">isEqualDate(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if two values are both valid Date objects and represent the exact same point in time.
Alias for <code>isSameDate</code> (or potentially reversed logic depending on intent, functionally identical).</p>
</dd>
<dt><a href="#isFile">isFile(filePath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a given path points to an existing file.
Uses <code>fs.lstatSync</code> to check the path status and handles potential errors (e.g., path doesn&#39;t exist).</p>
</dd>
<dt><a href="#isFolder">isFolder(filePath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a given path points to an existing directory (folder).
Uses <code>fs.lstatSync</code> to check the path status and handles potential errors (e.g., path doesn&#39;t exist).</p>
</dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a function.</p>
</dd>
<dt><a href="#isGuidFormat">isGuidFormat(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value conforms to the standard GUID format (e.g., &#39;xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#39;).
It validates the structure by splitting the string by hyphens and comparing the length and content
of each part against a template GUID.</p>
</dd>
<dt><a href="#isIpAddress">isIpAddress(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string represents a valid IPv4 address.
Allows specific strings like &#39;0.0.0.0&#39; and &#39;localhost&#39;.
Validates the format (four parts separated by dots) and the range of each part (0-255).
Also checks that the first part is not 0 (unless it&#39;s the specific &#39;0.0.0.0&#39; address).</p>
</dd>
<dt><a href="#isIsoDate">isIsoDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string represents a valid ISO 8601 date format.
This includes validation that the string can be parsed into a valid Date object
and that the string representation matches the ISO string generated from that Date object,
taking into account potential variations in millisecond precision.
Also performs a final check by comparing UTC string representations.</p>
</dd>
<dt><a href="#isKebabCase">isKebabCase(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is in kebab-case format.
It verifies this by converting the string to kebab-case and comparing it to the original.</p>
</dd>
<dt><a href="#isLowerCase">isLowerCase(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is entirely lowercase.
The string must be non-empty and valid.</p>
</dd>
<dt><a href="#isMatch">isMatch(source, target, caseSensitive, matchWhitespace)</a> ⇒ <code>boolean</code></dt>
<dd><p>Compares two strings for equality with options for case sensitivity and whitespace trimming.</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value can be interpreted as a finite number.
Handles both number primitives and strings that represent numbers.
Uses <code>parseFloat</code> and <code>isFinite</code> for the check.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a plain JavaScript object (not null, not an array).</p>
</dd>
<dt><a href="#isPascalCase">isPascalCase(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is in PascalCase (UpperCamelCase) format.
It verifies this by converting the string to PascalCase and comparing it to the original.</p>
</dd>
<dt><a href="#isPhoneNumber">isPhoneNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string matches a common phone number format using a regular expression.
Allows for optional country codes, parentheses around area codes, and spaces/dashes as separators.</p>
</dd>
<dt><a href="#isSameDate">isSameDate(date1, date2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if two values are both valid Date objects and represent the exact same point in time.</p>
</dd>
<dt><a href="#isSemver">isSemver(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is a valid Semantic Versioning (SemVer) string.
Uses the <code>semver</code> library for validation.</p>
</dd>
<dt><a href="#isSet">isSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is neither null nor undefined.</p>
</dd>
<dt><a href="#isValidShortDate">isValidShortDate(value, [allowFuture], [earliestYear])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string represents a valid date in YYYY/MM/DD or YYYY-MM-DD format.
Performs basic range checks on year, month, and day.
Allows optional constraints on the earliest acceptable year and whether future dates are allowed.</p>
</dd>
<dt><a href="#isSnakeCase">isSnakeCase(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is in snake_case format.
It verifies this by converting the string to snake_case and comparing it to the original.</p>
</dd>
<dt><a href="#isUidFormat">isUidFormat(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a valid UID format.
A valid UID must be exactly 32 characters long and contain only alphanumeric characters.</p>
</dd>
<dt><a href="#isUrl">isUrl(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string is a valid URL.
Requires the string to start with &#39;http://&#39; or &#39;https://&#39;, be trimmed of whitespace,
and be parseable by the native <code>URL</code> constructor.</p>
</dd>
<dt><a href="#isValidArrayIfSet">isValidArrayIfSet(value, [isEmptyOkay])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is either not set (null or undefined) or is a valid array.
This is useful for optional array parameters.</p>
</dd>
<dt><a href="#isValidArray">isValidArray(value, [isEmptyOkay])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is an array and optionally if it&#39;s non-empty.</p>
</dd>
<dt><a href="#isValidChars">isValidChars(value, [valid], [invalid], [isCaseSensitive])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string contains only characters from a specified set of valid characters.
It cleans the string using <code>cleanString</code> with the provided valid/invalid characters and case sensitivity, 
then compares the cleaned string to the original.</p>
</dd>
<dt><a href="#isValidObject">isValidObject(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a non-empty plain JavaScript object (not an array or null).</p>
</dd>
<dt><a href="#isValidPathIfSet">isValidPathIfSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is either not set (null or undefined) or is a valid path (file or folder).
Useful for optional path parameters.</p>
</dd>
<dt><a href="#getBase">getBase(value)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Internal helper to safely get the base name of a path.
Catches potential errors from <code>path.basename</code>.</p>
</dd>
<dt><a href="#isValidPath">isValidPath(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string appears to be a valid file or folder path by checking if its basename is a valid string.
This is a basic check and doesn&#39;t guarantee the path exists or is accessible.</p>
</dd>
<dt><a href="#isValidStringIfSet">isValidStringIfSet(value, [isEmptyOkay])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is either not set (null or undefined) or is a valid string.
Useful for optional string parameters.</p>
</dd>
<dt><a href="#isValidString">isValidString(value, [isEmptyOkay])</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a string and optionally if it&#39;s non-empty after trimming whitespace.</p>
</dd>
<dt><a href="#isZeroDate">isZeroDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value represents the &quot;zero date&quot; (typically epoch time, Jan 1, 1970, or a predefined constant <code>ZERO_DATE</code>).
It handles both Date objects and ISO date strings.</p>
</dd>
<dt><a href="#toId">toId(value)</a> ⇒ <code>number</code> | <code>string</code> | <code>undefined</code></dt>
<dd><p>Converts a value to an ID (number or string) or undefined.
Used internally for processing claim values.</p>
</dd>
<dt><a href="#verify">verify(token, secret, [ignoreExpiration])</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>Verifies a JWT token using a secret or public key.
Catches errors and returns undefined if verification fails.</p>
</dd>
<dt><a href="#decode">decode(token)</a> ⇒ <code>object</code> | <code>null</code></dt>
<dd><p>Decodes a JWT token without verifying the signature.</p>
</dd>
<dt><a href="#encode">encode(payload, certOrSecret, [options])</a> ⇒ <code>string</code></dt>
<dd><p>Encodes (signs) a payload into a JWT token.</p>
</dd>
<dt><a href="#fromClaims">fromClaims(obj)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>Converts a standard JWT claims object into an application-specific payload object.
Uses the <code>CLAIMS</code> mapping to transform keys and values.
Keeps unmapped claims as they are.</p>
</dd>
<dt><a href="#toClaims">toClaims(obj)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>Converts an application-specific payload object into a standard JWT claims object.
Uses the <code>CLAIMS</code> mapping to transform keys and values.
Keeps unmapped properties as they are.</p>
</dd>
<dt><a href="#loadJson">loadJson(filePath)</a> ⇒ <code>object</code> | <code>Array</code> | <code>null</code></dt>
<dd><p>Reads a file, parses its content as JSON, and returns the resulting object or array.
Returns null if the file cannot be read, parsing fails, or the result is not a valid object or array (empty arrays are okay).</p>
</dd>
<dt><a href="#makePath">makePath(dirPath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Creates a directory path, including any necessary parent directories.
If the directory already exists, it returns true.
Uses <code>fs.mkdirSync</code> with the <code>recursive</code> option.</p>
</dd>
<dt><a href="#maxDate">maxDate(dates)</a> ⇒ <code>Date</code> | <code>null</code></dt>
<dd><p>Finds the latest date from an array of Date objects.</p>
</dd>
<dt><a href="#minDate">minDate(dates)</a> ⇒ <code>Date</code> | <code>null</code></dt>
<dd><p>Finds the earliest date from an array of Date objects.</p>
</dd>
<dt><a href="#rename">rename(sourcePath, destinationPath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Internal helper function to attempt renaming a file.
Catches errors during the rename operation.</p>
</dd>
<dt><a href="#moveFile">moveFile(sourcePath, destinationPath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Moves a file from a source path to a destination path.
First, attempts to rename the file (atomic move on the same filesystem).
If renaming fails (e.g., moving across different filesystems), it falls back to copying the file
and then deleting the original source file.
Ensures the destination directory exists before attempting the move.</p>
</dd>
<dt><a href="#newCode">newCode([totalLength], [chars])</a> ⇒ <code>string</code></dt>
<dd><p>Generates a random code string of a specified length using a given set of characters.</p>
</dd>
<dt><a href="#newGuid">newGuid()</a> ⇒ <code>string</code></dt>
<dd><p>Generates a new version 4 UUID (GUID) using the <code>uuid</code> library.</p>
</dd>
<dt><a href="#newSalt">newSalt(byteCount, [saltOption])</a> ⇒ <code>string</code></dt>
<dd><p>Generates a cryptographically random salt string.</p>
</dd>
<dt><a href="#newUid">newUid()</a> ⇒ <code>string</code></dt>
<dd><p>Generates a new unique identifier (UID) string.
It creates a standard GUID, removes the hyphens, and converts it to uppercase.</p>
</dd>
<dt><a href="#parseJson">parseJson(rawJson)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>Safely parses a JSON string into a JavaScript object.
Returns the parsed object or undefined if parsing fails (e.g., invalid JSON).
Logs the error to the debug console if parsing fails.</p>
</dd>
<dt><a href="#parseJwt">parseJwt(token, [secret])</a> ⇒ <code>object</code> | <code>string</code> | <code>null</code> | <code>object</code> | <code>null</code> | <code>object</code> | <code>null</code> | <code>boolean</code> | <code>boolean</code></dt>
<dd><p>Parses a JSON Web Token (JWT) string and returns an object with details about the token.
It decodes the claims, converts them to a payload object, verifies the signature (if a secret is provided),
and checks if the token is expired.</p>
</dd>
<dt><a href="#print">print(obj)</a></dt>
<dd><p>Prints the key-value pairs of an object to the console in a formatted manner.
Keys starting with an underscore are ignored.
Keys are sorted alphabetically.
Values are formatted based on their type (string, boolean, array).
Arrays are printed with each element on a new line, aligned with the key.
A separator line is printed before the object content.</p>
</dd>
<dt><a href="#readFile">readFile(filePath)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Reads the entire content of a file synchronously.
Returns the file content as a UTF-8 string, or null if the file doesn&#39;t exist or an error occurs during reading.
Logs an error to the debug console if reading fails.</p>
</dd>
<dt><a href="#readLines">readLines(filePath)</a> ⇒ <code>Promise.&lt;(Array.&lt;string&gt;|undefined)&gt;</code></dt>
<dd><p>Asynchronously reads a file line by line and returns an array of strings.
Returns an array containing each line of the file, or undefined if an error occurs (e.g., file not found).</p>
</dd>
<dt><a href="#remove">remove(itemOrItems, cache)</a></dt>
<dd><p>Internal recursive function to remove audit fields from objects and arrays.
Modifies the input object/array directly unless a copy was made initially.
Uses a cache to handle circular references.</p>
</dd>
<dt><a href="#removeAuditFields">removeAuditFields(itemOrItems, [makeCopy])</a> ⇒ <code>object</code> | <code>Array</code></dt>
<dd><p>Recursively removes standard audit fields (defined in <code>constants.AUDIT_FIELDS</code>)
from an object or an array of objects.
Can operate on the original object/array or create a deep copy first.</p>
</dd>
<dt><a href="#processItem">processItem(value, fn, cache, deletedValue)</a> ⇒ <code>*</code></dt>
<dd><p>Internal recursive function to process items (objects or arrays) and remove elements marked as deleted.
Uses a cache to handle circular references.</p>
</dd>
<dt><a href="#removeDeleted">removeDeleted(value, fn, [deletedValue])</a> ⇒ <code>*</code></dt>
<dd><p>Recursively removes items marked as deleted from a nested structure (objects and arrays).
Uses the <code>isDeleted</code> function with a provided checker function <code>fn</code> to identify deleted items.
Deleted items within arrays are filtered out.
Entire objects identified as deleted are replaced with <code>deletedValue</code> (defaults to null).
Handles circular references.</p>
</dd>
<dt><a href="#removePrefix">removePrefix(value, prefix)</a> ⇒ <code>string</code></dt>
<dd><p>Removes a specified prefix from the beginning of a string, potentially multiple times.
If the string consists only of the prefix, an empty string is returned.
Returns the original string if the input value or prefix is not a valid string (empty strings are allowed).</p>
</dd>
<dt><a href="#remove">remove(obj, prop, cache)</a></dt>
<dd><p>Internal recursive function to remove a specific property from objects within a structure (object or array).
Modifies the input object/array directly.
Uses a cache to handle circular references.</p>
</dd>
<dt><a href="#removeProperty">removeProperty(obj, prop)</a> ⇒ <code>object</code> | <code>Array</code></dt>
<dd><p>Recursively removes a specified property from an object and any nested objects or objects within arrays.
Modifies the original object/array directly.
Handles circular references.</p>
</dd>
<dt><a href="#removeSuffix">removeSuffix(value, suffix)</a> ⇒ <code>string</code></dt>
<dd><p>Removes a specified suffix from the end of a string, potentially multiple times.
Returns the original string if the input value or suffix is not a valid string (empty strings are allowed).</p>
</dd>
<dt><a href="#findPosition">findPosition(value, sources)</a> ⇒ <code>number</code></dt>
<dd><p>Finds the position of a value within an array of source values.
Handles date comparison specifically using <code>isEqualDate</code>.</p>
</dd>
<dt><a href="#getValue">getValue(curValue, sources, targets)</a> ⇒ <code>*</code></dt>
<dd><p>Determines the replacement value for a given current value based on source and target arrays.
If the current value is found in the sources array, its corresponding value from the targets array is returned,
but only if the source and target values are of the same basic type (string, number, or date).
Otherwise, the original current value is returned.</p>
</dd>
<dt><a href="#replace">replace(itemOrItems, sources, targets, cache)</a></dt>
<dd><p>Internal recursive function to replace values within an object or array structure.
Modifies the input object/array directly unless a copy was made initially.
Uses a cache to handle circular references.</p>
</dd>
<dt><a href="#replaceValues">replaceValues(itemOrItems, sources, targets, [clone])</a> ⇒ <code>object</code> | <code>Array</code></dt>
<dd><p>Recursively replaces values within an object or array structure.
Traverses the structure and replaces any primitive value (string, number, date)
found in the <code>sources</code> array with the corresponding value from the <code>targets</code> array at the same index.
Replacement only occurs if the source and target values are of the same type (string, number, or date).
Handles nested objects, arrays, and circular references.
Can operate on the original structure or a deep clone.</p>
</dd>
<dt><a href="#saveJson">saveJson(data, filePath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Converts an object or array to a JSON string and saves it to a file.
Ensures the necessary directory structure exists before writing.</p>
</dd>
<dt><a href="#sortAscending">sortAscending(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>Comparison function for sorting numbers in ascending order.</p>
</dd>
<dt><a href="#sortDescending">sortDescending(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>Comparison function for sorting numbers in descending order.</p>
</dd>
<dt><a href="#sort">sort(values, [descending])</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Sorts an array containing numbers (or string representations of numbers).
Non-numeric values are filtered out before sorting.
Returns a new array with the numbers sorted either ascending (default) or descending.</p>
</dd>
<dt><a href="#splitFirst">splitFirst(str, separator)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Splits a string at the first occurrence of a specified separator.
Returns an array containing the part before the separator and the part after.
If the separator is not found, the array contains the original string as the only element.
Throws an error if the input string or separator is invalid or empty.</p>
</dd>
<dt><a href="#getCircularReplacer">getCircularReplacer()</a> ⇒ <code>function</code></dt>
<dd><p>Creates a replacer function for <code>JSON.stringify</code> that handles circular references.
It keeps track of objects seen using a WeakSet and returns undefined for duplicates.</p>
</dd>
<dt><a href="#stringify">stringify(item)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a JavaScript value to a JSON string, safely handling circular references.
Uses <code>JSON.stringify</code> with a custom replacer to prevent errors with circular structures.</p>
</dd>
<dt><a href="#toBoolean">toBoolean(value, [defaultValue])</a> ⇒ <code>boolean</code> | <code>*</code></dt>
<dd><p>Converts various input types (boolean, string, number) into a boolean value.
Recognizes common string representations (&#39;1&#39;, &#39;TRUE&#39;, &#39;YES&#39;, &#39;Y&#39; for true; &#39;0&#39;, &#39;FALSE&#39;, &#39;NO&#39;, &#39;N&#39; for false, case-insensitive).
Recognizes numbers 1 (true) and 0 (false).
If the input cannot be confidently converted, returns the provided default value.</p>
</dd>
<dt><a href="#toCamelCase">toCamelCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to camelCase.
First converts the string to snake_case, then transforms it to camelCase.
Handles single-character words and ensures the first character is lowercase.</p>
</dd>
<dt><a href="#toColumn">toColumn(values)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Formats an array of values (strings, numbers, booleans) into a single column of strings,
padded to the width of the longest value.
Filters out non-string/number/boolean values.
Converts numbers and booleans to their string representations.</p>
</dd>
<dt><a href="#toEpoch">toEpoch([date])</a> ⇒ <code>number</code></dt>
<dd><p>Converts a Date object to its Unix epoch timestamp (seconds since Jan 1, 1970).</p>
</dd>
<dt><a href="#toGuidFormat">toGuidFormat(value)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Converts a value (potentially a GUID or UID) into the standard lowercase GUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).
If the value is already a valid GUID format, it&#39;s converted to lowercase.
If the value is a valid UID format (32 alphanumeric chars), it&#39;s formatted into a GUID string.
Returns undefined if the input is neither a valid GUID nor a valid UID format.</p>
</dd>
<dt><a href="#toKebabCase">toKebabCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to kebab-case.
Handles various casing formats like camelCase, PascalCase, and strings with acronyms.
Uses a regex to split the string into parts and joins them with hyphens.</p>
</dd>
<dt><a href="#toPascalCase">toPascalCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to PascalCase (also known as UpperCamelCase).
First converts the string to camelCase, then capitalizes the first letter.
Returns an empty string if the input is not a valid string.</p>
</dd>
<dt><a href="#toRequest">toRequest(req)</a> ⇒ <code>object</code> | <code>undefined</code> | <code>string</code> | <code>object</code> | <code>string</code> | <code>Date</code> | <code>undefined</code> | <code>string</code> | <code>undefined</code> | <code>object</code> | <code>undefined</code> | <code>object</code></dt>
<dd><p>Transforms a raw request object (presumably from an HTTP request) into a standardized request format.
Extracts path, request metadata (ID, date), token, session information, and the request body.
Removes internal properties like <code>_headers</code> and <code>_path</code> from the copied body.</p>
</dd>
<dt><a href="#toResult">toResult(result, sample)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a single item or an array based on the sample array</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to snake_case.
Handles various casing formats like camelCase, PascalCase, and strings with acronyms.</p>
</dd>
<dt><a href="#getColumnWidths">getColumnWidths(lines, delimiter)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Calculates the maximum width needed for each column based on the content in the lines.</p>
</dd>
<dt><a href="#addHeader">addHeader(cache)</a></dt>
<dd><p>Adds a horizontal line separator to the table cache based on the calculated column widths.</p>
</dd>
<dt><a href="#addLine">addLine(cache, lineParts)</a></dt>
<dd><p>Formats a single row (provided as an array of parts) and adds it to the table cache.
Pads each part according to the corresponding column width.</p>
</dd>
<dt><a href="#toTable">toTable(lines, delimiter)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Converts an array of delimited strings into a formatted text table with borders.
Inserts a header line after the first row.</p>
</dd>
<dt><a href="#toUidFormat">toUidFormat(value)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Converts a value to a standardized UID format (32 uppercase alphanumeric characters).
It accepts values that are already in UID format or GUID format.
If the input value is not in either format, it returns null.
Otherwise, it cleans the string by removing non-alphanumeric characters and converts it to uppercase.</p>
</dd>
<dt><a href="#trimTop">trimTop(lines)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Trims leading elements from an array that are not valid strings (or are empty strings).
It removes elements from the beginning until the first valid string is encountered.
All subsequent elements (including non-valid strings) are kept.</p>
</dd>
<dt><a href="#trimBottom">trimBottom(lines)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Trims trailing elements from an array that are not valid strings (or are empty strings).
It reverses the array, trims from the top using <code>trimTop</code>, and then reverses it back.</p>
</dd>
<dt><a href="#trim">trim(lines)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Trims both leading and trailing elements from an array that are not valid strings (or are empty strings).
Applies <code>trimTop</code> first, then <code>trimBottom</code> to the result.</p>
</dd>
<dt><a href="#trimBrackets">trimBrackets(value)</a> ⇒ <code>string</code></dt>
<dd><p>Recursively removes matching pairs of brackets ( (), [], {} ) from the start and end of a string.
Stops when the string is no longer enclosed in a matching bracket pair or becomes empty.</p>
</dd>
<dt><a href="#trimString">trimString(value)</a> ⇒ <code>string</code></dt>
<dd><p>Trims leading and trailing whitespace from a string.
If the input is not a valid string (including empty strings), it returns an empty string.</p>
</dd>
<dt><a href="#trimToNull">trimToNull(value)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Trims leading and trailing whitespace from a string.
If the resulting string is empty or the input was not a valid string, it returns null.</p>
</dd>
<dt><a href="#trimToUndefined">trimToUndefined(value)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Trims leading and trailing whitespace from a string.
If the resulting string is empty or the input was not a valid string, it returns undefined.</p>
</dd>
<dt><a href="#undouble">undouble(value, targets)</a> ⇒ <code>string</code></dt>
<dd><p>Replaces consecutive occurrences of specified target characters within a string with a single instance.
For example, undouble(&#39;a//b/c&#39;, &#39;/&#39;) would return &#39;a/b/c&#39;.</p>
</dd>
<dt><a href="#uniqueNumbers">uniqueNumbers(values)</a> ⇒ <code>Array.&lt;(number|string)&gt;</code></dt>
<dd><p>Filters an array to contain only unique numbers, preserving the original order.
Non-numeric elements are ignored.
It handles both number primitives and string representations of numbers.</p>
</dd>
<dt><a href="#uniqueObjects">uniqueObjects(values, [strict])</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Filters an array to contain only unique objects, preserving the original order.
Non-object elements are ignored.
Uniqueness can be determined by strict equality (===) or by comparing stringified versions.</p>
</dd>
<dt><a href="#uniqueString">uniqueString(values, [isCaseSensitive], [trim])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Filters an array to contain only unique strings, preserving the original order.
Non-string elements are ignored.
Offers options for case-sensitive comparison and trimming whitespace.</p>
</dd>
<dt><a href="#unique">unique(values, [params])</a> ⇒ <code>Array.&lt;any&gt;</code> | <code>null</code></dt>
<dd><p>Creates a new array with unique values based on the predominant data type in the input array (numbers, objects, or strings).
It delegates to specialized unique functions (<code>uniqueNumbers</code>, <code>uniqueObjects</code>, <code>uniqueStrings</code>) based on the detected type.
If the array contains a mix of types or primarily non-primitive/non-object types, the behavior might be unexpected as it prioritizes numbers, then objects, then strings.
Returns null if the array doesn&#39;t contain numbers, objects, or valid strings.</p>
</dd>
<dt><a href="#unQuote">unQuote(value)</a> ⇒ <code>string</code></dt>
<dd><p>Removes leading and trailing quote characters (&quot;) from a string, preserving any leading/trailing whitespace.
If the string is not valid, is less than 3 characters long after trimming, or doesn&#39;t start and end with a quote, the original value is returned.</p>
</dd>
<dt><a href="#walkFolder">walkFolder(folderPath, results)</a></dt>
<dd><p>Recursively walks a folder and collects the paths of files and subfolders relative to the root.
This is an internal helper function for <code>walk</code>.</p>
</dd>
<dt><a href="#walk">walk(folderPath)</a> ⇒ <code>object</code> | <code>undefined</code> | <code>string</code> | <code>Array.&lt;string&gt;</code> | <code>Array.&lt;string&gt;</code></dt>
<dd><p>Walks a directory recursively and returns an object containing lists of all files and folders found,
with paths relative to the starting folder.</p>
</dd>
<dt><a href="#writeFile">writeFile(filePath, [contents])</a> ⇒ <code>boolean</code></dt>
<dd><p>Writes content to a file, creating the necessary directory structure if it doesn&#39;t exist.</p>
</dd>
<dt><a href="#writeLines">writeLines(filePath, lines)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Writes an array of strings to a file, joining them with the OS-specific end-of-line character.
Filters out non-string elements from the input array.</p>
</dd>
</dl>

<a name="addDays"></a>

## addDays(value, quantity) ⇒ <code>Date</code> \| <code>undefined</code>
Adds a specified number of days to a date.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>undefined</code> - A new Date object with the days added, or undefined if inputs are invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Date</code> | The original date. |
| quantity | <code>number</code> | The number of days to add. |

<a name="addMinutes"></a>

## addMinutes(value, quantity) ⇒ <code>Date</code> \| <code>undefined</code>
Adds a specified number of minutes to a date.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>undefined</code> - A new Date object with the minutes added, or undefined if inputs are invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Date</code> | The original date. |
| quantity | <code>number</code> | The number of minutes to add. |

<a name="sortAscending"></a>

## sortAscending(numbers) ⇒ <code>Array.&lt;number&gt;</code>
Sorts an array of numbers in ascending order.

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - The sorted array.  

| Param | Type | Description |
| --- | --- | --- |
| numbers | <code>Array.&lt;number&gt;</code> | The array of numbers to sort. |

<a name="cleanAlphanumeric"></a>

## cleanAlphanumeric(value) ⇒ <code>string</code>
Removes all characters from a string except for letters and numbers.

**Kind**: global function  
**Returns**: <code>string</code> - The cleaned string containing only alphanumeric characters, or an empty string if the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The input value to clean. |

<a name="cleanDigits"></a>

## cleanDigits(value) ⇒ <code>string</code>
Removes all non-digit characters from a string.

**Kind**: global function  
**Returns**: <code>string</code> - The cleaned string containing only digits, or an empty string if the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The input value to clean. |

<a name="removeId"></a>

## removeId(item, params)
Removes the ID property from an object if the UID property exists (or if force is true).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to process. |
| params | <code>object</code> | Configuration parameters (id, uid, force). |

<a name="removeAudit"></a>

## removeAudit(item, params)
Removes audit trail properties (specified in params.audit) from an object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to process. |
| params | <code>object</code> | Configuration parameters (audit). |

<a name="moveUid"></a>

## moveUid(item, params)
Moves the value from the UID property to the ID property if the ID property is missing.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to process. |
| params | <code>object</code> | Configuration parameters (id, uid). |

<a name="moveIds"></a>

## moveIds(item, params)
Renames properties ending with '-uid' or '_uid' to the corresponding key without the suffix.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to process. |
| params | <code>object</code> | Configuration parameters (id, uid). |

<a name="trimIds"></a>

## trimIds(item, params)
Renames properties ending with '-id', '_id', '-uid', or '_uid' to the base key.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to process. |
| params | <code>object</code> | Configuration parameters (id, uid). |

<a name="removeNulls"></a>

## removeNulls(item, params)
Removes properties with null values from an object unless params.nulls is true.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to process. |
| params | <code>object</code> | Configuration parameters (nulls). |

<a name="processItems"></a>

## processItems(items, params)
Recursively processes an array of items or nested arrays.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;(object\|Array)&gt;</code> | The array of items to process. |
| params | <code>object</code> | Configuration parameters passed to processItem. |

<a name="processItem"></a>

## processItem(item, params)
Processes a single item object: removes IDs, audits, handles UIDs, trims IDs, removes nulls, and recurses into nested objects/arrays.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The item to process. |
| params | <code>object</code> | Configuration parameters (id, uid, audit, force, nulls, cache). |

<a name="cleanDto"></a>

## cleanDto(itemOrItems, [params])
Cleans a DTO (Data Transfer Object) or an array of DTOs by applying various transformations like removing audit fields, handling ID/UID properties, and removing nulls.
This function modifies the input object(s) in place.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array.&lt;object&gt;</code> |  | The DTO or array of DTOs to clean. |
| [params] | <code>object</code> | <code>DEFAULT_PARAMS</code> | Configuration options: |
| [params.id] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The name of the primary ID field. |
| [params.uid] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The name of the unique ID field (often used before the primary ID is assigned). |
| [params.audit] | <code>Array.&lt;string&gt;</code> | <code>[]</code> | An array of property names considered audit fields to be removed. |
| [params.force] | <code>boolean</code> | <code>false</code> | If true, forces removal of the `id` field even if `uid` is not present. |
| [params.nulls] | <code>boolean</code> | <code>false</code> | If true, keeps properties with null values; otherwise, they are removed. |

<a name="cleanString"></a>

## cleanString(value, [valid], [invalid], [isCaseSensitive]) ⇒ <code>string</code> \| <code>undefined</code>
Cleans a string by keeping only specified valid characters and removing specified invalid characters.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The cleaned string, or undefined if the input is not a valid string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>any</code> |  | The input value, expected to be a string. |
| [valid] | <code>string</code> | <code>&quot;ALPHANUMERIC&quot;</code> | A string containing all valid characters to keep. |
| [invalid] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string containing invalid characters to remove. |
| [isCaseSensitive] | <code>boolean</code> | <code>false</code> | Whether the character matching should be case-sensitive. |

<a name="copyContents"></a>

## copyContents(sourceFile, destinationFile) ⇒ <code>Promise.&lt;void&gt;</code>
Asynchronously copies the contents of a source file to a destination file, line by line.
Uses OS-specific end-of-line characters.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the copy operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| sourceFile | <code>string</code> | The path to the source file. |
| destinationFile | <code>string</code> | The path to the destination file. It will be created or overwritten. |

<a name="copyFile"></a>

## copyFile(sourcePath, targetPath) ⇒ <code>boolean</code>
Synchronously copies a file from a source path to a target path.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the copy was successful, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| sourcePath | <code>string</code> | The path to the source file. |
| targetPath | <code>string</code> | The path to the destination file. It will be created or overwritten. |

<a name="copyObject"></a>

## copyObject(item) ⇒ <code>object</code>
Creates a deep copy of an object using JSON stringification and parsing.
Note: This method does not handle non-JSON-serializable values like functions, Dates, or undefined.

**Kind**: global function  
**Returns**: <code>object</code> - A deep copy of the input object.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The object to copy. |

<a name="createPath"></a>

## createPath(value) ⇒ <code>boolean</code>
Creates a directory path recursively if it doesn't already exist.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the path exists or was successfully created, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The directory path to create. |

<a name="deleteDirectory"></a>

## deleteDirectory(folderPath) ⇒ <code>boolean</code>
Synchronously deletes a directory and its contents recursively.
Uses the rimraf package.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the directory doesn't exist after the operation (or didn't exist initially), false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>string</code> | The path to the directory to delete. |

<a name="deleteFile"></a>

## deleteFile(filePath, [missingOkay]) ⇒ <code>boolean</code>
Synchronously deletes a file.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the file is successfully deleted (or didn't exist and missingOkay is true), false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filePath | <code>string</code> |  | The path to the file to delete. |
| [missingOkay] | <code>boolean</code> | <code>true</code> | If true, returns true even if the file doesn't exist. If false, returns false if the file doesn't exist. |

<a name="sortDescending"></a>

## sortDescending(numbers) ⇒ <code>Array.&lt;number&gt;</code>
Sorts an array of numbers in descending order.

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - The sorted array.  

| Param | Type | Description |
| --- | --- | --- |
| numbers | <code>Array.&lt;number&gt;</code> | The array of numbers to sort. |

<a name="getVars"></a>

## getVars() ⇒ <code>object</code>
Retrieves environment variables from process.env.
Filters for keys that are all uppercase and have string, number, or boolean values.
Sorts the keys alphabetically.

**Kind**: global function  
**Returns**: <code>object</code> - An object containing the filtered and sorted environment variables.  
<a name="findAllUids"></a>

## findAllUids(itemOrItems) ⇒ <code>Array.&lt;string&gt;</code>
Finds all unique strings matching the UID format (e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx') 
within an object or array, including nested structures.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of unique UID strings found.  

| Param | Type | Description |
| --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array</code> | The object or array to search. |

<a name="fromDto"></a>

## fromDto(itemOrItems, [params])
Converts specific string representations within a DTO (or array of DTOs) to their corresponding JavaScript types (e.g., ISO date strings to Date objects).
This function modifies the input object(s) in place.
NOTE: The conversion of digit strings to Dates via `Date(item[key])` in `makeIntegers` seems incorrect and likely should convert to Numbers.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array.&lt;object&gt;</code> |  | The DTO or array of DTOs to process. |
| [params] | <code>object</code> | <code>DEFAULT_PARAMS</code> | Configuration options (currently unused beyond cache initialization). |

<a name="fromEpoch"></a>

## fromEpoch(value) ⇒ <code>Date</code> \| <code>null</code>
Converts a Unix epoch timestamp (seconds since Jan 1, 1970) to a JavaScript Date object.
Handles both number and string representations of the epoch time.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>null</code> - The corresponding Date object, or null if the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> \| <code>string</code> | The epoch timestamp (in seconds). |

<a name="fromIsoDate"></a>

## fromIsoDate(value) ⇒ <code>Date</code> \| <code>null</code>
Converts an ISO 8601 date string to a JavaScript Date object.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>null</code> - The corresponding Date object, or null if the input is not a valid ISO date string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The ISO 8601 date string. |

<a name="fromResult"></a>

## fromResult(item) ⇒ <code>any</code>
Extracts the nested 'result' property from an object, traversing down until a non-object 'result' is found or the property doesn't exist.
Useful for unwrapping nested API responses.

**Kind**: global function  
**Returns**: <code>any</code> - The final extracted value from the deepest 'result' property, or the original item if no 'result' property is found initially.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The input object, potentially containing nested 'result' properties. |

<a name="fromShortDate"></a>

## fromShortDate(value, [allowFuture], [earliestYear]) ⇒ <code>Date</code> \| <code>null</code>
Converts a short date string (YYYY-MM-DD or YYYY/MM/DD) to a JavaScript Date object.
Note: The `allowFuture` and `earliestYear` parameters are currently unused in the function body, although they are present in the signature of the imported `isShortDate`.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>null</code> - The corresponding Date object, or null if the input is not a valid short date string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The short date string. |
| [allowFuture] | <code>boolean</code> | (Unused) Intended to allow dates in the future. |
| [earliestYear] | <code>number</code> | (Unused) Intended to specify the earliest acceptable year. |

<a name="getArrayCount"></a>

## getArrayCount(value) ⇒ <code>number</code>
Gets the length of an array.
Handles non-array inputs gracefully.

**Kind**: global function  
**Returns**: <code>number</code> - The length of the array if it's a valid array (including empty), otherwise -1.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check, expected to be an array. |

<a name="getBlockDate"></a>

## getBlockDate([value], [format]) ⇒ <code>string</code>
Formats a Date object into a blockdate string (e.g., YYYYMMDDHHmmssSSS).

**Kind**: global function  
**Returns**: <code>string</code> - The formatted blockdate string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>Date</code> | <code>new Date()</code> | The Date object to format. Defaults to the current date and time. |
| [format] | <code>string</code> | <code>&quot;DEFAULT_FORMAT&quot;</code> | A string indicating the desired length/precision (e.g., 'YYYYMMDD', 'YYYYMMDDHHmm'). The output string will be truncated to the length of this format string. |

<a name="getBody"></a>

## getBody(req) ⇒ <code>Promise.&lt;object&gt;</code>
Asynchronously extracts the request body from a request object (req).
Primarily designed for Next.js environments, falling back to `req.body` if present.
Logs an error and returns an empty object if the request object is invalid.

**Kind**: global function  
**Returns**: <code>Promise.&lt;object&gt;</code> - A promise that resolves to the request body object.  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The request object (e.g., from an HTTP request). |

<a name="getBracket"></a>

## getBracket(value) ⇒ <code>object</code> \| <code>undefined</code>
Finds the matching bracket pair (e.g., { open: '(', close: ')' }) from a predefined list 
(`constants.BRACKETS`) that encloses the given string value.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - The matching bracket pair object if found, otherwise undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check for enclosing brackets. |

<a name="getBaseDir"></a>

## getBaseDir(values) ⇒ <code>string</code> \| <code>null</code>
Finds the longest common base directory path from an array of file paths.
Ensures all paths share the same root directory before finding the common subdirectory path.
Handles different path separators (Windows/Unix).

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The longest common base directory path, or null if paths don't share a common root or if the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array.&lt;string&gt;</code> | An array of file path strings. |

<a name="getDayName"></a>

## getDayName(date) ⇒ <code>string</code> \| <code>undefined</code>
Gets the full name of the day of the week (e.g., 'Sunday', 'Monday') for a given Date object or ISO date string.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The full name of the day, or undefined if the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>string</code> | The Date object or ISO 8601 date string. |

<a name="getDuration"></a>

## getDuration(start, end) ⇒ <code>object</code>
Calculates the duration between two timestamps (or Date objects) and formats it.

**Kind**: global function  
**Returns**: <code>object</code> - An object containing:
  - `values`: An object with the duration broken down into `weeks`, `days`, `hours`, `mins`, `seconds`, and `ms`.
  - `text`: A string representation of the duration in the format 'WW:DD:HH:MM:SS.sss', omitting leading zero components (e.g., 'HH:MM:SS.sss' or 'MM:SS.sss').  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> \| <code>Date</code> | The starting timestamp (milliseconds since epoch) or Date object. |
| end | <code>number</code> \| <code>Date</code> | The ending timestamp (milliseconds since epoch) or Date object. |

<a name="getEmail"></a>

## getEmail(value) ⇒ <code>string</code> \| <code>undefined</code>
Extracts the first valid email address found in a string.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The first valid email address found, or undefined if none are found or the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to search for email addresses. |

<a name="getEmails"></a>

## getEmails(value) ⇒ <code>Array.&lt;string&gt;</code>
Extracts all valid email addresses found in a string using a regular expression.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of all valid email addresses found, or an empty array if none are found or the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to search for email addresses. |

<a name="getFileContents"></a>

## getFileContents(filePath, [options], [format]) ⇒ <code>string</code> \| <code>undefined</code>
Synchronously reads the contents of a file.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The file contents as a string, or undefined if an error occurs during reading.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filePath | <code>string</code> |  | The path to the file. |
| [options] | <code>object</code> \| <code>string</code> |  | Options passed to `fs.readFileSync` (e.g., encoding, flag) or the encoding string itself. |
| [format] | <code>string</code> | <code>&quot;&#x27;utf8&#x27;&quot;</code> | The encoding format to use when converting the buffer to a string. |

<a name="getFileName"></a>

## getFileName(filePath, [includeExtension]) ⇒ <code>string</code> \| <code>null</code>
Extracts the file name from a file path, optionally including or excluding the extension.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The file name (with or without extension), or null if an error occurs (e.g., invalid path).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filePath | <code>string</code> |  | The full path to the file. |
| [includeExtension] | <code>boolean</code> | <code>true</code> | Whether to include the file extension in the returned name. |

<a name="getFileSize"></a>

## getFileSize(filePath) ⇒ <code>number</code>
Gets the size of a file in bytes.

**Kind**: global function  
**Returns**: <code>number</code> - The file size in bytes, or -1 if the path does not point to a file or an error occurs.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the file. |

<a name="getFiles"></a>

## getFiles(folderPath) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
Synchronously reads the contents of a directory and returns an array of full paths for its direct children (files and subdirectories).

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>null</code> - An array of full paths of items within the directory, or null if the path is not a valid folder or an error occurs.  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>string</code> | The path to the directory. |

<a name="getFirst"></a>

## getFirst(value, [trim]) ⇒ <code>any</code> \| <code>string</code> \| <code>undefined</code>
Gets the first element of an array or the first character of a string.
Optionally trims the string before extracting the first character.

**Kind**: global function  
**Returns**: <code>any</code> \| <code>string</code> \| <code>undefined</code> - The first element of the array, the first character of the string (or empty string if trimmed input is empty), or undefined if the input is not a non-empty array or a valid string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Array</code> \| <code>string</code> |  | The array or string. |
| [trim] | <code>boolean</code> | <code>false</code> | If true and the input is a string, trim whitespace before getting the first character. |

<a name="getFolderContents"></a>

## getFolderContents(folderPath) ⇒ <code>Array.&lt;string&gt;</code> \| <code>undefined</code>
Synchronously reads the contents of a directory and returns an array of full paths for its direct children.
Similar to `getFiles`, but returns `undefined` instead of `null` on error or invalid input.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>undefined</code> - An array of full paths of items within the directory, or undefined if the path is invalid or an error occurs.  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>string</code> | The path to the directory. |

<a name="getHash"></a>

## getHash(value) ⇒ <code>string</code>
Calculates the MD5 hash of a given string value.

**Kind**: global function  
**Returns**: <code>string</code> - The MD5 hash of the value as a hexadecimal string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string value to hash. |

<a name="getId"></a>

## getId(itemOrId) ⇒ <code>string</code> \| <code>number</code> \| <code>undefined</code>
Extracts an ID from an item.
If the input is already a string or number, it's returned directly.
If the input is an object, it looks for properties named 'id' or '_id' (in that order)
and returns the value if it's a string or number.
Operates on a deep copy of the object to avoid side effects.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>number</code> \| <code>undefined</code> - The extracted ID, or undefined if no valid ID is found.  

| Param | Type | Description |
| --- | --- | --- |
| itemOrId | <code>object</code> \| <code>string</code> \| <code>number</code> | The item (object) or the ID itself (string or number). |

<a name="getInnerTokens"></a>

## getInnerTokens(str, bracket) ⇒ <code>string</code> \| <code>null</code>
Extracts the innermost content enclosed by a specified pair of opening and closing brackets/tokens.
Handles nested brackets correctly.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The innermost content including the enclosing brackets, or null if no matching brackets are found or if the bracket definition is invalid.  
**Throws**:

- <code>Error</code> If the bracket object or its properties are invalid.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to search within. |
| bracket | <code>object</code> | An object containing the opening and closing bracket strings. |
| bracket.open | <code>string</code> | The opening bracket/token. |
| bracket.close | <code>string</code> | The closing bracket/token. |

<a name="getLast"></a>

## getLast(value, [trim]) ⇒ <code>any</code> \| <code>string</code> \| <code>undefined</code>
Gets the last element of an array or the last character of a string.
Optionally trims the string before extracting the last character.

**Kind**: global function  
**Returns**: <code>any</code> \| <code>string</code> \| <code>undefined</code> - The last element of the array, the last character of the string (or empty string if trimmed input is empty), or undefined if the input is not a non-empty array or a valid string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Array</code> \| <code>string</code> |  | The array or string. |
| [trim] | <code>boolean</code> | <code>false</code> | If true and the input is a string, trim whitespace before getting the last character. |

<a name="getMax"></a>

## getMax(values) ⇒ <code>number</code> \| <code>string</code> \| <code>null</code>
Finds the maximum numeric value in an array.
Filters out non-numeric values before comparison.
Handles both number primitives and string representations of numbers.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>string</code> \| <code>null</code> - The maximum numeric value found (preserving its original type), or null if the array contains no numbers.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array.&lt;(number\|string\|any)&gt;</code> | An array containing potential numbers. |

<a name="getMin"></a>

## getMin(values) ⇒ <code>number</code> \| <code>string</code> \| <code>null</code>
Finds the minimum numeric value in an array.
Filters out non-numeric values before comparison.
Handles both number primitives and string representations of numbers.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>string</code> \| <code>null</code> - The minimum numeric value found (preserving its original type), or null if the array contains no numbers.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array.&lt;(number\|string\|any)&gt;</code> | An array containing potential numbers. |

<a name="getPadPrefix"></a>

## getPadPrefix(value) ⇒ <code>string</code> \| <code>null</code>
Gets the leading whitespace (prefix padding) of a string.
Returns null if the input is not a valid string (empty string is okay).
Returns an empty string if there is no leading whitespace.
Otherwise, returns a string consisting of spaces matching the length of the leading whitespace.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The leading whitespace as a string of spaces, or an empty string, or null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to analyze. |

<a name="getPadSuffix"></a>

## getPadSuffix(value) ⇒ <code>string</code> \| <code>null</code>
Gets the trailing whitespace (suffix padding) of a string.
Returns null if the input is not a valid string (empty string is okay).
Returns an empty string if there is no trailing whitespace.
Otherwise, returns a string consisting of spaces matching the length of the trailing whitespace.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The trailing whitespace as a string of spaces, or an empty string, or null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to analyze. |

<a name="getPads"></a>

## getPads(line) ⇒ <code>object</code> \| <code>number</code> \| <code>number</code>
Calculates the length of leading (prefix) and trailing (suffix) whitespace in a string.

**Kind**: global function  
**Returns**: <code>object</code> - An object containing the lengths of the prefix and suffix whitespace.<code>number</code> - return.prefix - The number of leading whitespace characters.<code>number</code> - return.suffix - The number of trailing whitespace characters.  

| Param | Type | Description |
| --- | --- | --- |
| line | <code>string</code> | The string to analyze. |

<a name="getSingle"></a>

## getSingle(value) ⇒ <code>\*</code>
Returns the first element of an array if it contains exactly one element, otherwise returns undefined.

**Kind**: global function  
**Returns**: <code>\*</code> - The first element of the array if it has a single element, otherwise undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. Expected to be an array. |

<a name="getStringSize"></a>

## getStringSize(value, [encoding]) ⇒ <code>number</code>
Calculates the byte size of a string using the specified encoding.

**Kind**: global function  
**Returns**: <code>number</code> - The byte size of the string, or -1 if the input is not a valid string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The string to measure. |
| [encoding] | <code>string</code> | <code>&quot;&#x27;utf8&#x27;&quot;</code> | The encoding to use for byte length calculation. |

<a name="getSubstring"></a>

## getSubstring(values, [isCaseSensitive]) ⇒ <code>string</code> \| <code>null</code>
Finds the longest common starting substring among an array of strings.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The longest common starting substring, or null if the input is not a valid array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array.&lt;string&gt;</code> |  | An array of strings. |
| [isCaseSensitive] | <code>boolean</code> | <code>true</code> | Determines if the comparison should be case-sensitive. |

<a name="getTokenizedSegments"></a>

## getTokenizedSegments(str, brackets) ⇒ <code>Array.&lt;string&gt;</code>
Extracts segments from a string that are enclosed by specified opening and closing brackets.
Only top-level (non-nested) segments are returned.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of extracted segments (including the brackets).  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The input string to process. |
| brackets | <code>object</code> \| <code>Array.&lt;object&gt;</code> | A single bracket definition object or an array of bracket definition objects. Each object should have `open` and `close` properties containing the opening and closing bracket strings. |

<a name="getUid"></a>

## getUid(itemOrId, [strict]) ⇒ <code>string</code> \| <code>undefined</code>
Extracts a UID (or optionally a GUID) from an item or returns the input if it's already a valid UID/GUID format.
Checks for a `uid` property within an object if the input is an object.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The extracted UID/GUID, or undefined if not found or the input is invalid.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemOrId | <code>string</code> \| <code>object</code> |  | The item to extract the UID from. Can be a string (potential UID/GUID) or an object containing a `uid` property. |
| [strict] | <code>boolean</code> | <code>false</code> | If true, only accepts the UID format. If false, accepts both UID and GUID formats. |

<a name="getVars"></a>

## getVars([proper], [valid]) ⇒ <code>object</code>
Retrieves environment variables, optionally filtering for proper naming conventions and valid value types.

**Kind**: global function  
**Returns**: <code>object</code> - An object containing the filtered environment variables, sorted alphabetically by key.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [proper] | <code>boolean</code> | <code>true</code> | If true, only includes variables with all-uppercase keys. |
| [valid] | <code>boolean</code> | <code>true</code> | If true, only includes variables whose values are numbers, booleans, or non-empty strings. |

<a name="hasString"></a>

## hasString(value, target, [isCaseSensitive]) ⇒ <code>boolean</code>
Checks if a string contains a target substring, with optional case sensitivity.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the target substring is found, false otherwise or if inputs are not strings.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The string to search within. |
| target | <code>string</code> |  | The substring to search for. |
| [isCaseSensitive] | <code>boolean</code> | <code>false</code> | Determines if the search should be case-sensitive. |

<a name="hashFileContents"></a>

## hashFileContents(value, [trim], [algorithm], [digest]) ⇒ <code>Promise.&lt;(string\|null\|undefined)&gt;</code>
Computes a hash of the file contents.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(string\|null\|undefined)&gt;</code> - A promise that resolves with the hash string, null if the input is not a file, or undefined if an error occurs during file reading or hashing.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The path to the file. |
| [trim] | <code>boolean</code> | <code>false</code> | If true, reads the file line by line, trims whitespace from each line, and joins them with newline characters before hashing. Otherwise, reads the entire file buffer. |
| [algorithm] | <code>string</code> | <code>&quot;&#x27;md5&#x27;&quot;</code> | The hashing algorithm to use (e.g., 'md5', 'sha1', 'sha256'). |
| [digest] | <code>string</code> | <code>&quot;&#x27;hex&#x27;&quot;</code> | The encoding for the output hash (e.g., 'hex', 'base64'). |

<a name="hashFile"></a>

## hashFile(value, [algorithm], [digest]) ⇒ <code>string</code> \| <code>null</code> \| <code>undefined</code>
Computes a hash of a file's contents synchronously.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> \| <code>undefined</code> - The hash string, null if the input is not a file, or undefined if an error occurs during file reading or hashing.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The path to the file. |
| [algorithm] | <code>string</code> | <code>&quot;&#x27;md5&#x27;&quot;</code> | The hashing algorithm to use (e.g., 'md5', 'sha1', 'sha256'). |
| [digest] | <code>string</code> | <code>&quot;&#x27;hex&#x27;&quot;</code> | The encoding for the output hash (e.g., 'hex', 'base64'). |

<a name="hashLines"></a>

## hashLines(lines, [trim]) ⇒ <code>string</code>
Computes a hash of an array of lines (strings, numbers, or booleans).
Filters out invalid entries, converts numbers/booleans to strings, optionally trims whitespace from each line, joins them into a single string, and then hashes the result using `hashString` (defaulting to md5/hex).

**Kind**: global function  
**Returns**: <code>string</code> - The computed hash string (md5/hex), or an empty string if the input results in no valid content to hash.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| lines | <code>Array.&lt;(string\|number\|boolean)&gt;</code> |  | An array of values to hash. |
| [trim] | <code>boolean</code> | <code>true</code> | If true, trims whitespace from each valid line before joining. |

<a name="hashString"></a>

## hashString(value) ⇒ <code>string</code> \| <code>undefined</code>
Computes a hash (md5/hex by default) of a string after trimming leading/trailing whitespace.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The hash string, or undefined if the input is not a valid string (even after trimming).  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to hash. |

<a name="hash"></a>

## hash(value, salt, [hmacOption], [digestOption]) ⇒ <code>string</code>
Computes an HMAC hash of a value using a salt.

**Kind**: global function  
**Returns**: <code>string</code> - The computed HMAC hash.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> \| <code>Buffer</code> \| <code>DataView</code> |  | The value to hash. |
| salt | <code>string</code> \| <code>Buffer</code> \| <code>TypedArray</code> \| <code>DataView</code> \| <code>KeyObject</code> |  | The salt to use for the HMAC. |
| [hmacOption] | <code>string</code> | <code>&quot;c.HMAC_OPTION&quot;</code> | The HMAC algorithm (e.g., 'sha256'). Defaults to constant `HMAC_OPTION`. |
| [digestOption] | <code>string</code> | <code>&quot;c.DIGEST_OPTION&quot;</code> | The encoding for the output hash (e.g., 'hex', 'base64'). Defaults to constant `DIGEST_OPTION`. |

<a name="removeBlankContentType"></a>

## removeBlankContentType(headers)
Removes the Content-Type header if its value is not a valid, non-empty string.
Modifies the headers object in place.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>object</code> | The headers object. |

<a name="toUrl"></a>

## toUrl([value]) ⇒ <code>string</code>
Converts a value into a full URL string, ensuring it starts with http:// or https://.
Removes leading/trailing slashes before prefixing with http:// if necessary.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted URL string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>string</code> | <code>&quot;&#x27;/&#x27;&quot;</code> | The value to convert to a URL. Defaults to '/'. |

<a name="toBody"></a>

## toBody(value) ⇒ <code>string</code> \| <code>undefined</code>
Converts a value to a string suitable for an HTTP request body.
Stringifies objects, passes through strings, returns undefined otherwise.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The stringified body or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |

<a name="addHeaders"></a>

## addHeaders([creds], [headers]) ⇒ <code>object</code>
Merges default headers, provided headers, and adds Authorization headers based on credentials.
Ensures Content-Type is set if not provided or blank.

**Kind**: global function  
**Returns**: <code>object</code> - The combined headers object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [creds] | <code>object</code> | <code>{}</code> | Credentials object which may contain user, pass/password, or token. |
| [headers] | <code>object</code> | <code>{}</code> | Additional headers to include. |

<a name="doPromise"></a>

## doPromise(options) ⇒ <code>Promise.&lt;\*&gt;</code>
Performs a fetch request with the specified options.
Handles URL formatting, body conversion, and header generation.

**Kind**: global function  
**Returns**: <code>Promise.&lt;\*&gt;</code> - A promise that resolves with the JSON response, or logs an error on failure.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | The options for the fetch request. |
| [options.method] | <code>string</code> | <code>&quot;&#x27;GET&#x27;&quot;</code> | The HTTP method. |
| options.url | <code>string</code> |  | The target URL. |
| [options.data] | <code>\*</code> |  | The request body data. |
| [options.creds] | <code>object</code> | <code>{}</code> | Credentials for Authorization header. |
| [options.headers] | <code>object</code> | <code>{}</code> | Additional request headers. |

<a name="doGet"></a>

## doGet(url, [creds], [headers]) ⇒ <code>Promise.&lt;(*|null)&gt;</code>
Performs a GET request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(*|null)&gt;</code> - A promise that resolves with the JSON response, or null on error.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The target URL. |
| [creds] | <code>object</code> | <code>{}</code> | Credentials for Authorization header. |
| [headers] | <code>object</code> | <code>{}</code> | Additional request headers. |

<a name="doPost"></a>

## doPost(url, data, [creds], [headers]) ⇒ <code>Promise.&lt;(*|null)&gt;</code>
Performs a POST request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(*|null)&gt;</code> - A promise that resolves with the JSON response, or null on error.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The target URL. |
| data | <code>\*</code> |  | The request body data. |
| [creds] | <code>object</code> | <code>{}</code> | Credentials for Authorization header. |
| [headers] | <code>object</code> | <code>{}</code> | Additional request headers. |

<a name="doPut"></a>

## doPut(url, data, [creds], [headers]) ⇒ <code>Promise.&lt;(*|null)&gt;</code>
Performs a PUT request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(*|null)&gt;</code> - A promise that resolves with the JSON response, or null on error.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The target URL. |
| data | <code>\*</code> |  | The request body data. |
| [creds] | <code>object</code> | <code>{}</code> | Credentials for Authorization header. |
| [headers] | <code>object</code> | <code>{}</code> | Additional request headers. |

<a name="doDelete"></a>

## doDelete(url, [data], [creds], [headers]) ⇒ <code>Promise.&lt;(*|null)&gt;</code>
Performs a DELETE request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(*|null)&gt;</code> - A promise that resolves with the JSON response, or null on error.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The target URL. |
| [data] | <code>\*</code> |  | Optional request body data. |
| [creds] | <code>object</code> | <code>{}</code> | Credentials for Authorization header. |
| [headers] | <code>object</code> | <code>{}</code> | Additional request headers. |

<a name="ping"></a>

## ping([creds], [headers]) ⇒ <code>Promise.&lt;(*|string)&gt;</code>
Performs a GET request to the root path ('/') to check connectivity.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(*|string)&gt;</code> - A promise that resolves with the response or 'FAILURE'.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [creds] | <code>object</code> | <code>{}</code> | Credentials for Authorization header. |
| [headers] | <code>object</code> | <code>{}</code> | Additional request headers. |

<a name="initArray"></a>

## initArray(value) ⇒ <code>Array.&lt;\*&gt;</code>
Ensures the input value is an array and filters out undefined elements.
If the input is not an array, it wraps it in an array.

**Kind**: global function  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array containing the defined elements from the input value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to initialize as an array. |

<a name="isAlpha"></a>

## isAlpha(value) ⇒ <code>boolean</code>
Checks if a string contains only alphabetic characters (a-z, case-insensitive).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid and contains only letters, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isAlphanumeric"></a>

## isAlphanumeric(value) ⇒ <code>boolean</code>
Checks if a string contains only alphanumeric characters (a-z, 0-9, case-insensitive).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid and contains only letters and numbers, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isAsync"></a>

## isAsync(value) ⇒ <code>boolean</code>
Checks if a value is an async function.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is a function and its constructor name is 'AsyncFunction', false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isBooleanIfSet"></a>

## isBooleanIfSet(value) ⇒ <code>boolean</code>
Checks if a value is either not set (null or undefined) or is a boolean (true or false).
Useful for optional boolean parameters.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is not set or is a boolean, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>boolean</code>
Checks if a value is strictly true or false.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is exactly true or false, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isBracketted"></a>

## isBracketted(value) ⇒ <code>boolean</code>
Checks if a string starts with an opening bracket ('(', '[', '{') and ends with the corresponding closing bracket.
Uses `getBracket` to determine the bracket pair.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid and enclosed in matching brackets, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isCamelCase"></a>

## isCamelCase(value) ⇒ <code>boolean</code>
Checks if a string is in camelCase format.
It verifies this by converting the string to camelCase and comparing it to the original.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is already in camelCase format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isCaps"></a>

## isCaps(value) ⇒ <code>boolean</code>
Checks if a string is entirely uppercase.
The string must be non-empty and valid.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid, non-empty, and entirely uppercase, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
Checks if a value is a valid JavaScript Date object.
Verifies that the value is an object, an instance of Date, and does not represent an invalid date (e.g., NaN time).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is a valid Date object, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isDefined"></a>

## isDefined(value) ⇒ <code>boolean</code>
Checks if a value is defined (i.e., not `undefined`).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is not undefined, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isDeleted"></a>

## isDeleted(item, fn) ⇒ <code>boolean</code>
Checks if an item is considered "deleted" based on a provided checking function.
Throws an error if the provided checker `fn` is not a function.
Returns false if the item is not an object.
Otherwise, returns the result of calling the checker function `fn` with the item.

**Kind**: global function  
**Returns**: <code>boolean</code> - The result of the checker function `fn`, or false if the item isn't an object.  
**Throws**:

- <code>Error</code> If `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | The item (expected to be an object) to check. |
| fn | <code>function</code> | A function that takes the item and returns true if it's considered deleted, false otherwise. |

<a name="isDigits"></a>

## isDigits(value) ⇒ <code>boolean</code>
Checks if a string contains only numeric digits (0-9).
The string must be a valid, non-empty string.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid and contains only digits, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isEmail"></a>

## isEmail(value) ⇒ <code>boolean</code>
Checks if a string is a valid email address format.
It uses `getEmail` to potentially clean the input and then compares it to the original value.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string matches the cleaned email format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isEqualDate"></a>

## isEqualDate(a, b) ⇒ <code>boolean</code>
Checks if two values are both valid Date objects and represent the exact same point in time.
Alias for `isSameDate` (or potentially reversed logic depending on intent, functionally identical).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if both are valid Dates and their millisecond timestamps are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | The first value to compare. |
| b | <code>\*</code> | The second value to compare. |

<a name="isFile"></a>

## isFile(filePath) ⇒ <code>boolean</code>
Checks if a given path points to an existing file.
Uses `fs.lstatSync` to check the path status and handles potential errors (e.g., path doesn't exist).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the path exists and is a file, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to check. |

<a name="isFolder"></a>

## isFolder(filePath) ⇒ <code>boolean</code>
Checks if a given path points to an existing directory (folder).
Uses `fs.lstatSync` to check the path status and handles potential errors (e.g., path doesn't exist).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the path exists and is a directory, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to check. |

<a name="isFunction"></a>

## isFunction(value) ⇒ <code>boolean</code>
Checks if a value is a function.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is of type 'function', false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isGuidFormat"></a>

## isGuidFormat(value) ⇒ <code>boolean</code>
Checks if a value conforms to the standard GUID format (e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx').
It validates the structure by splitting the string by hyphens and comparing the length and content
of each part against a template GUID.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is in a valid GUID format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string value to check. |

<a name="isIpAddress"></a>

## isIpAddress(value) ⇒ <code>boolean</code>
Checks if a string represents a valid IPv4 address.
Allows specific strings like '0.0.0.0' and 'localhost'.
Validates the format (four parts separated by dots) and the range of each part (0-255).
Also checks that the first part is not 0 (unless it's the specific '0.0.0.0' address).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is a valid IPv4 address or an acceptable special case, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to validate as an IP address. |

<a name="isIsoDate"></a>

## isIsoDate(value) ⇒ <code>boolean</code>
Checks if a string represents a valid ISO 8601 date format.
This includes validation that the string can be parsed into a valid Date object
and that the string representation matches the ISO string generated from that Date object,
taking into account potential variations in millisecond precision.
Also performs a final check by comparing UTC string representations.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is a valid ISO 8601 date format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to validate as an ISO date. |

<a name="isKebabCase"></a>

## isKebabCase(value) ⇒ <code>boolean</code>
Checks if a string is in kebab-case format.
It verifies this by converting the string to kebab-case and comparing it to the original.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is already in kebab-case format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isLowerCase"></a>

## isLowerCase(value) ⇒ <code>boolean</code>
Checks if a string is entirely lowercase.
The string must be non-empty and valid.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid, non-empty, and entirely lowercase, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isMatch"></a>

## isMatch(source, target, caseSensitive, matchWhitespace) ⇒ <code>boolean</code>
Compares two strings for equality with options for case sensitivity and whitespace trimming.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the strings match according to the specified options, false otherwise.  
**Throws**:

- <code>Error</code> If an unexpected combination of internal logic states occurs (should not happen).


| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The first string to compare. |
| target | <code>string</code> | The second string to compare. |
| caseSensitive | <code>boolean</code> | If true, the comparison is case-sensitive. |
| matchWhitespace | <code>boolean</code> | If true, leading/trailing whitespace is considered in the comparison. If false, strings are trimmed before comparing. |

<a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
Checks if a value can be interpreted as a finite number.
Handles both number primitives and strings that represent numbers.
Uses `parseFloat` and `isFinite` for the check.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is a finite number, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Checks if a value is a plain JavaScript object (not null, not an array).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is an object, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isPascalCase"></a>

## isPascalCase(value) ⇒ <code>boolean</code>
Checks if a string is in PascalCase (UpperCamelCase) format.
It verifies this by converting the string to PascalCase and comparing it to the original.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is already in PascalCase format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isPhoneNumber"></a>

## isPhoneNumber(value) ⇒ <code>boolean</code>
Checks if a string matches a common phone number format using a regular expression.
Allows for optional country codes, parentheses around area codes, and spaces/dashes as separators.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string matches the phone number pattern, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to validate as a phone number. |

<a name="isSameDate"></a>

## isSameDate(date1, date2) ⇒ <code>boolean</code>
Checks if two values are both valid Date objects and represent the exact same point in time.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if both are Dates and their millisecond timestamps are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| date1 | <code>\*</code> | The first value to compare. |
| date2 | <code>\*</code> | The second value to compare. |

<a name="isSemver"></a>

## isSemver(value) ⇒ <code>boolean</code>
Checks if a string is a valid Semantic Versioning (SemVer) string.
Uses the `semver` library for validation.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is a valid SemVer string, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isSet"></a>

## isSet(value) ⇒ <code>boolean</code>
Checks if a value is neither null nor undefined.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is not null and not undefined, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="isValidShortDate"></a>

## isValidShortDate(value, [allowFuture], [earliestYear]) ⇒ <code>boolean</code>
Checks if a string represents a valid date in YYYY/MM/DD or YYYY-MM-DD format.
Performs basic range checks on year, month, and day.
Allows optional constraints on the earliest acceptable year and whether future dates are allowed.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is a valid short date according to the criteria, false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The date string to validate. |
| [allowFuture] | <code>boolean</code> | <code>false</code> | If true, dates in the future are considered valid. Defaults to false. |
| [earliestYear] | <code>number</code> | <code>1900</code> | The minimum acceptable year. Defaults to 1900. |

<a name="isSnakeCase"></a>

## isSnakeCase(value) ⇒ <code>boolean</code>
Checks if a string is in snake_case format.
It verifies this by converting the string to snake_case and comparing it to the original.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is already in snake_case format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to check. |

<a name="isUidFormat"></a>

## isUidFormat(value) ⇒ <code>boolean</code>
Checks if a value is a valid UID format.
A valid UID must be exactly 32 characters long and contain only alphanumeric characters.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is a valid UID format, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The value to check. |

<a name="isUrl"></a>

## isUrl(value) ⇒ <code>boolean</code>
Checks if a string is a valid URL.
Requires the string to start with 'http://' or 'https://', be trimmed of whitespace,
and be parseable by the native `URL` constructor.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is a valid URL according to the criteria, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to validate as a URL. |

<a name="isValidArrayIfSet"></a>

## isValidArrayIfSet(value, [isEmptyOkay]) ⇒ <code>boolean</code>
Checks if a value is either not set (null or undefined) or is a valid array.
This is useful for optional array parameters.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is not set or is a valid array (considering `isEmptyOkay`), false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to check. |
| [isEmptyOkay] | <code>boolean</code> | <code>false</code> | Passed to `isValidArray`. If true, an empty array is considered valid. |

<a name="isValidArray"></a>

## isValidArray(value, [isEmptyOkay]) ⇒ <code>boolean</code>
Checks if a value is an array and optionally if it's non-empty.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is an array and meets the emptiness condition, false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to check. |
| [isEmptyOkay] | <code>boolean</code> | <code>false</code> | If true, an empty array is considered valid. If false (default), the array must contain at least one element. |

<a name="isValidChars"></a>

## isValidChars(value, [valid], [invalid], [isCaseSensitive]) ⇒ <code>boolean</code>
Checks if a string contains only characters from a specified set of valid characters.
It cleans the string using `cleanString` with the provided valid/invalid characters and case sensitivity, 
then compares the cleaned string to the original.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is valid (non-empty) and contains only allowed characters, false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The string to validate. |
| [valid] | <code>string</code> | <code>&quot;c.ALPHANUMERIC&quot;</code> | A string containing all allowed characters. Defaults to alphanumeric. |
| [invalid] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string containing characters explicitly disallowed (not typically used with `valid`). |
| [isCaseSensitive] | <code>boolean</code> | <code>false</code> | If true, validation is case-sensitive. Defaults to false. |

<a name="isValidObject"></a>

## isValidObject(obj) ⇒ <code>boolean</code>
Checks if a value is a non-empty plain JavaScript object (not an array or null).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is an object with at least one key, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The value to check. |

<a name="isValidPathIfSet"></a>

## isValidPathIfSet(value) ⇒ <code>boolean</code>
Checks if a value is either not set (null or undefined) or is a valid path (file or folder).
Useful for optional path parameters.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is not set or is a valid path, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The path string to check. |

<a name="getBase"></a>

## getBase(value) ⇒ <code>string</code> \| <code>undefined</code>
Internal helper to safely get the base name of a path.
Catches potential errors from `path.basename`.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The base name or undefined if an error occurred.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The path string. |

<a name="isValidPath"></a>

## isValidPath(value) ⇒ <code>boolean</code>
Checks if a string appears to be a valid file or folder path by checking if its basename is a valid string.
This is a basic check and doesn't guarantee the path exists or is accessible.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the basename of the path is a non-empty string, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The path string to check. |

<a name="isValidStringIfSet"></a>

## isValidStringIfSet(value, [isEmptyOkay]) ⇒ <code>boolean</code>
Checks if a value is either not set (null or undefined) or is a valid string.
Useful for optional string parameters.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is not set or is a valid string (considering `isEmptyOkay`), false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to check. |
| [isEmptyOkay] | <code>boolean</code> | <code>false</code> | Passed to `isValidString`. If true, an empty string is considered valid. |

<a name="isValidString"></a>

## isValidString(value, [isEmptyOkay]) ⇒ <code>boolean</code>
Checks if a value is a string and optionally if it's non-empty after trimming whitespace.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is a string and meets the emptiness condition, false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to check. |
| [isEmptyOkay] | <code>boolean</code> | <code>false</code> | If true, an empty or whitespace-only string is considered valid. If false (default), the string must contain non-whitespace characters. |

<a name="isZeroDate"></a>

## isZeroDate(value) ⇒ <code>boolean</code>
Checks if a value represents the "zero date" (typically epoch time, Jan 1, 1970, or a predefined constant `ZERO_DATE`).
It handles both Date objects and ISO date strings.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value represents the zero date, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Date</code> \| <code>string</code> | The value to check (either a Date object or an ISO date string). |

<a name="toId"></a>

## toId(value) ⇒ <code>number</code> \| <code>string</code> \| <code>undefined</code>
Converts a value to an ID (number or string) or undefined.
Used internally for processing claim values.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>string</code> \| <code>undefined</code> - The converted ID or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |

<a name="verify"></a>

## verify(token, secret, [ignoreExpiration]) ⇒ <code>object</code> \| <code>undefined</code>
Verifies a JWT token using a secret or public key.
Catches errors and returns undefined if verification fails.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - The decoded payload if verification is successful, otherwise undefined.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>string</code> |  | The JWT token string. |
| secret | <code>string</code> \| <code>Buffer</code> |  | The secret or public key for verification. |
| [ignoreExpiration] | <code>boolean</code> | <code>true</code> | If true, bypasses expiration check. Defaults to true. |

<a name="decode"></a>

## decode(token) ⇒ <code>object</code> \| <code>null</code>
Decodes a JWT token without verifying the signature.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>null</code> - The decoded payload, or null if decoding fails.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The JWT token string. |

<a name="encode"></a>

## encode(payload, certOrSecret, [options]) ⇒ <code>string</code>
Encodes (signs) a payload into a JWT token.

**Kind**: global function  
**Returns**: <code>string</code> - The generated JWT token string.  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>object</code> \| <code>string</code> \| <code>Buffer</code> | The payload to sign. |
| certOrSecret | <code>string</code> \| <code>Buffer</code> | The secret or private key for signing. |
| [options] | <code>object</code> | Options for `jsonwebtoken.sign` (e.g., algorithm, expiresIn). |

<a name="fromClaims"></a>

## fromClaims(obj) ⇒ <code>object</code> \| <code>undefined</code>
Converts a standard JWT claims object into an application-specific payload object.
Uses the `CLAIMS` mapping to transform keys and values.
Keeps unmapped claims as they are.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - The transformed application payload object, or undefined if input is not an object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | The JWT claims object. |

<a name="toClaims"></a>

## toClaims(obj) ⇒ <code>object</code> \| <code>undefined</code>
Converts an application-specific payload object into a standard JWT claims object.
Uses the `CLAIMS` mapping to transform keys and values.
Keeps unmapped properties as they are.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - The transformed JWT claims object, or undefined if input is not an object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | The application payload object. |

<a name="loadJson"></a>

## loadJson(filePath) ⇒ <code>object</code> \| <code>Array</code> \| <code>null</code>
Reads a file, parses its content as JSON, and returns the resulting object or array.
Returns null if the file cannot be read, parsing fails, or the result is not a valid object or array (empty arrays are okay).

**Kind**: global function  
**Returns**: <code>object</code> \| <code>Array</code> \| <code>null</code> - The parsed JSON object or array, or null on failure.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the JSON file. |

<a name="makePath"></a>

## makePath(dirPath) ⇒ <code>boolean</code>
Creates a directory path, including any necessary parent directories.
If the directory already exists, it returns true.
Uses `fs.mkdirSync` with the `recursive` option.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the directory exists or was successfully created, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | The directory path to create. |

<a name="maxDate"></a>

## maxDate(dates) ⇒ <code>Date</code> \| <code>null</code>
Finds the latest date from an array of Date objects.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>null</code> - The latest Date object from the array, or null if the input is not a non-empty array.  

| Param | Type | Description |
| --- | --- | --- |
| dates | <code>Array.&lt;Date&gt;</code> | An array of Date objects. |

<a name="minDate"></a>

## minDate(dates) ⇒ <code>Date</code> \| <code>null</code>
Finds the earliest date from an array of Date objects.

**Kind**: global function  
**Returns**: <code>Date</code> \| <code>null</code> - The earliest Date object from the array, or null if the input is not a non-empty array.  

| Param | Type | Description |
| --- | --- | --- |
| dates | <code>Array.&lt;Date&gt;</code> | An array of Date objects. |

<a name="rename"></a>

## rename(sourcePath, destinationPath) ⇒ <code>boolean</code>
Internal helper function to attempt renaming a file.
Catches errors during the rename operation.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the rename was successful and the destination file exists, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| sourcePath | <code>string</code> | The current path of the file. |
| destinationPath | <code>string</code> | The desired new path for the file. |

<a name="moveFile"></a>

## moveFile(sourcePath, destinationPath) ⇒ <code>boolean</code>
Moves a file from a source path to a destination path.
First, attempts to rename the file (atomic move on the same filesystem).
If renaming fails (e.g., moving across different filesystems), it falls back to copying the file
and then deleting the original source file.
Ensures the destination directory exists before attempting the move.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the file was successfully moved (either by rename or copy+delete), false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| sourcePath | <code>string</code> | The path of the file to move. |
| destinationPath | <code>string</code> | The target path to move the file to. |

<a name="newCode"></a>

## newCode([totalLength], [chars]) ⇒ <code>string</code>
Generates a random code string of a specified length using a given set of characters.

**Kind**: global function  
**Returns**: <code>string</code> - The generated random code string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [totalLength] | <code>number</code> | <code>c.DEFAULTS.CODE.LENGTH</code> | The desired length of the code. Defaults to the value defined in `c.DEFAULTS.CODE.LENGTH`. |
| [chars] | <code>string</code> | <code>&quot;c.DEFAULTS.CODE.CHARS&quot;</code> | The string of characters to use for generating the code. Defaults to the value defined in `c.DEFAULTS.CODE.CHARS`. |

<a name="newGuid"></a>

## newGuid() ⇒ <code>string</code>
Generates a new version 4 UUID (GUID) using the `uuid` library.

**Kind**: global function  
**Returns**: <code>string</code> - A standard v4 UUID string (e.g., 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').  
<a name="newSalt"></a>

## newSalt(byteCount, [saltOption]) ⇒ <code>string</code>
Generates a cryptographically random salt string.

**Kind**: global function  
**Returns**: <code>string</code> - The generated salt string in the specified encoding.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| byteCount | <code>number</code> |  | The number of random bytes to generate. |
| [saltOption] | <code>string</code> | <code>&quot;c.SALT_OPTION&quot;</code> | The encoding format for the output string (e.g., 'hex', 'base64'). Defaults to `c.SALT_OPTION`. |

<a name="newUid"></a>

## newUid() ⇒ <code>string</code>
Generates a new unique identifier (UID) string.
It creates a standard GUID, removes the hyphens, and converts it to uppercase.

**Kind**: global function  
**Returns**: <code>string</code> - A 32-character uppercase alphanumeric UID string.  
<a name="parseJson"></a>

## parseJson(rawJson) ⇒ <code>object</code> \| <code>undefined</code>
Safely parses a JSON string into a JavaScript object.
Returns the parsed object or undefined if parsing fails (e.g., invalid JSON).
Logs the error to the debug console if parsing fails.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - The parsed JavaScript object, or undefined if parsing fails.  

| Param | Type | Description |
| --- | --- | --- |
| rawJson | <code>string</code> | The JSON string to parse. |

<a name="parseJwt"></a>

## parseJwt(token, [secret]) ⇒ <code>object</code> \| <code>string</code> \| <code>null</code> \| <code>object</code> \| <code>null</code> \| <code>object</code> \| <code>null</code> \| <code>boolean</code> \| <code>boolean</code>
Parses a JSON Web Token (JWT) string and returns an object with details about the token.
It decodes the claims, converts them to a payload object, verifies the signature (if a secret is provided),
and checks if the token is expired.

**Kind**: global function  
**Returns**: <code>object</code> - An object containing information about the parsed token.<code>string</code> \| <code>null</code> - return.token - The original token string, or null if the input was invalid.<code>object</code> \| <code>null</code> - return.claims - The decoded claims from the token, or null if decoding failed.<code>object</code> \| <code>null</code> - return.payload - The payload derived from the claims (often the main data), or null if claims are invalid.<code>boolean</code> - return.isValid - True if the token signature was successfully verified (requires a secret), false otherwise.<code>boolean</code> - return.isExpired - True if the token signature is valid but the token has passed its expiration time (requires a secret), false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>string</code> |  | The JWT string to parse. |
| [secret] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The secret key to verify the token's signature. If empty, signature verification is skipped. |

<a name="print"></a>

## print(obj)
Prints the key-value pairs of an object to the console in a formatted manner.
Keys starting with an underscore are ignored.
Keys are sorted alphabetically.
Values are formatted based on their type (string, boolean, array).
Arrays are printed with each element on a new line, aligned with the key.
A separator line is printed before the object content.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | The object to print. |

<a name="readFile"></a>

## readFile(filePath) ⇒ <code>string</code> \| <code>null</code>
Reads the entire content of a file synchronously.
Returns the file content as a UTF-8 string, or null if the file doesn't exist or an error occurs during reading.
Logs an error to the debug console if reading fails.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The content of the file as a string, or null on failure.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the file to read. |

<a name="readLines"></a>

## readLines(filePath) ⇒ <code>Promise.&lt;(Array.&lt;string&gt;\|undefined)&gt;</code>
Asynchronously reads a file line by line and returns an array of strings.
Returns an array containing each line of the file, or undefined if an error occurs (e.g., file not found).

**Kind**: global function  
**Returns**: <code>Promise.&lt;(Array.&lt;string&gt;\|undefined)&gt;</code> - A promise that resolves to an array of strings (each representing a line), or undefined on failure.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The path to the file to read. |

<a name="remove"></a>

## remove(itemOrItems, cache)
Internal recursive function to remove audit fields from objects and arrays.
Modifies the input object/array directly unless a copy was made initially.
Uses a cache to handle circular references.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array</code> | The object or array to process. |
| cache | <code>object</code> | An object to track processed items and prevent infinite loops. |
| cache.items | <code>Array</code> | An array storing references to items already processed. |

<a name="removeAuditFields"></a>

## removeAuditFields(itemOrItems, [makeCopy]) ⇒ <code>object</code> \| <code>Array</code>
Recursively removes standard audit fields (defined in `constants.AUDIT_FIELDS`)
from an object or an array of objects.
Can operate on the original object/array or create a deep copy first.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>Array</code> - The processed object or array with audit fields removed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array</code> |  | The object or array to remove audit fields from. |
| [makeCopy] | <code>boolean</code> | <code>false</code> | If true, creates a deep copy before removing fields. Otherwise, modifies the original. |

<a name="processItem"></a>

## processItem(value, fn, cache, deletedValue) ⇒ <code>\*</code>
Internal recursive function to process items (objects or arrays) and remove elements marked as deleted.
Uses a cache to handle circular references.

**Kind**: global function  
**Returns**: <code>\*</code> - The processed value, with deleted items removed or replaced.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The item (object, array, or other value) to process. |
| fn | <code>function</code> | The function used by `isDeleted` to determine if an item is marked as deleted. |
| cache | <code>object</code> | An object to track processed items. |
| cache.items | <code>Array</code> | Array storing references to items already processed. |
| deletedValue | <code>\*</code> | The value to return for items identified as deleted at the object level. |

<a name="removeDeleted"></a>

## removeDeleted(value, fn, [deletedValue]) ⇒ <code>\*</code>
Recursively removes items marked as deleted from a nested structure (objects and arrays).
Uses the `isDeleted` function with a provided checker function `fn` to identify deleted items.
Deleted items within arrays are filtered out.
Entire objects identified as deleted are replaced with `deletedValue` (defaults to null).
Handles circular references.

**Kind**: global function  
**Returns**: <code>\*</code> - The processed structure with deleted items removed or replaced.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The object, array, or other value to process. |
| fn | <code>function</code> |  | The function passed to `isDeleted` to check if an item is deleted. |
| [deletedValue] | <code>\*</code> | <code></code> | The value to replace objects that are identified as deleted. Defaults to null. |

<a name="removePrefix"></a>

## removePrefix(value, prefix) ⇒ <code>string</code>
Removes a specified prefix from the beginning of a string, potentially multiple times.
If the string consists only of the prefix, an empty string is returned.
Returns the original string if the input value or prefix is not a valid string (empty strings are allowed).

**Kind**: global function  
**Returns**: <code>string</code> - The string with the prefix removed, or the original string if conditions aren't met.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to remove the prefix from. |
| prefix | <code>string</code> | The prefix to remove. |

<a name="remove"></a>

## remove(obj, prop, cache)
Internal recursive function to remove a specific property from objects within a structure (object or array).
Modifies the input object/array directly.
Uses a cache to handle circular references.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> \| <code>Array</code> | The object or array to process. |
| prop | <code>string</code> | The name of the property to remove. |
| cache | <code>object</code> | An object to track processed items. |
| cache.items | <code>Array</code> | Array storing references to items already processed. |

<a name="removeProperty"></a>

## removeProperty(obj, prop) ⇒ <code>object</code> \| <code>Array</code>
Recursively removes a specified property from an object and any nested objects or objects within arrays.
Modifies the original object/array directly.
Handles circular references.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>Array</code> - The original object or array, modified in place.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> \| <code>Array</code> | The object or array from which to remove the property. |
| prop | <code>string</code> | The name of the property to remove. |

<a name="removeSuffix"></a>

## removeSuffix(value, suffix) ⇒ <code>string</code>
Removes a specified suffix from the end of a string, potentially multiple times.
Returns the original string if the input value or suffix is not a valid string (empty strings are allowed).

**Kind**: global function  
**Returns**: <code>string</code> - The string with the suffix removed, or the original string if conditions aren't met.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to remove the suffix from. |
| suffix | <code>string</code> | The suffix to remove. |

<a name="findPosition"></a>

## findPosition(value, sources) ⇒ <code>number</code>
Finds the position of a value within an array of source values.
Handles date comparison specifically using `isEqualDate`.

**Kind**: global function  
**Returns**: <code>number</code> - The index of the value in the sources array, or -1 if not found.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to find. |
| sources | <code>Array.&lt;\*&gt;</code> | The array of source values to search within. |

<a name="getValue"></a>

## getValue(curValue, sources, targets) ⇒ <code>\*</code>
Determines the replacement value for a given current value based on source and target arrays.
If the current value is found in the sources array, its corresponding value from the targets array is returned,
but only if the source and target values are of the same basic type (string, number, or date).
Otherwise, the original current value is returned.

**Kind**: global function  
**Returns**: <code>\*</code> - The corresponding target value if found and type-compatible, otherwise the original `curValue`.  

| Param | Type | Description |
| --- | --- | --- |
| curValue | <code>\*</code> | The current value to potentially replace. |
| sources | <code>Array.&lt;\*&gt;</code> | The array of source values. |
| targets | <code>Array.&lt;\*&gt;</code> | The array of target values. |

<a name="replace"></a>

## replace(itemOrItems, sources, targets, cache)
Internal recursive function to replace values within an object or array structure.
Modifies the input object/array directly unless a copy was made initially.
Uses a cache to handle circular references.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array</code> | The object or array to process. |
| sources | <code>Array.&lt;\*&gt;</code> | The array of source values to look for. |
| targets | <code>Array.&lt;\*&gt;</code> | The array of corresponding target values. |
| cache | <code>object</code> | An object to track processed items. |
| cache.items | <code>Array</code> | Array storing references to items already processed. |

<a name="replaceValues"></a>

## replaceValues(itemOrItems, sources, targets, [clone]) ⇒ <code>object</code> \| <code>Array</code>
Recursively replaces values within an object or array structure.
Traverses the structure and replaces any primitive value (string, number, date)
found in the `sources` array with the corresponding value from the `targets` array at the same index.
Replacement only occurs if the source and target values are of the same type (string, number, or date).
Handles nested objects, arrays, and circular references.
Can operate on the original structure or a deep clone.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>Array</code> - The processed structure with values replaced.  
**Throws**:

- <code>Error</code> If `sources` or `targets` are not arrays, or if they have different lengths.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemOrItems | <code>object</code> \| <code>Array</code> |  | The object or array structure to process. |
| sources | <code>Array.&lt;\*&gt;</code> |  | An array of values to search for. |
| targets | <code>Array.&lt;\*&gt;</code> |  | An array of replacement values, corresponding to `sources`. |
| [clone] | <code>boolean</code> | <code>false</code> | If true, creates a deep clone of `itemOrItems` before replacing values. Otherwise, modifies the original. |

<a name="saveJson"></a>

## saveJson(data, filePath) ⇒ <code>boolean</code>
Converts an object or array to a JSON string and saves it to a file.
Ensures the necessary directory structure exists before writing.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the data was a valid object/array and the file was written successfully, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> \| <code>Array</code> | The object or array to save as JSON. |
| filePath | <code>string</code> | The full path of the file to save the JSON data to. |

<a name="sortAscending"></a>

## sortAscending(a, b) ⇒ <code>number</code>
Comparison function for sorting numbers in ascending order.

**Kind**: global function  
**Returns**: <code>number</code> - Negative if a < b, positive if a > b, zero if a === b.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | First number. |
| b | <code>number</code> | Second number. |

<a name="sortDescending"></a>

## sortDescending(a, b) ⇒ <code>number</code>
Comparison function for sorting numbers in descending order.

**Kind**: global function  
**Returns**: <code>number</code> - Negative if b < a, positive if b > a, zero if a === b.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | First number. |
| b | <code>number</code> | Second number. |

<a name="sort"></a>

## sort(values, [descending]) ⇒ <code>Array.&lt;number&gt;</code>
Sorts an array containing numbers (or string representations of numbers).
Non-numeric values are filtered out before sorting.
Returns a new array with the numbers sorted either ascending (default) or descending.

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - A new array containing the sorted numbers.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array.&lt;any&gt;</code> |  | The array containing potential numbers. |
| [descending] | <code>boolean</code> | <code>false</code> | If true, sorts in descending order. Defaults to false (ascending). |

<a name="splitFirst"></a>

## splitFirst(str, separator) ⇒ <code>Array.&lt;string&gt;</code>
Splits a string at the first occurrence of a specified separator.
Returns an array containing the part before the separator and the part after.
If the separator is not found, the array contains the original string as the only element.
Throws an error if the input string or separator is invalid or empty.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array containing one or two parts of the split string.  
**Throws**:

- <code>Error</code> If `str` or `separator` is not a non-empty valid string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to split. |
| separator | <code>string</code> | The separator string to split by. |

<a name="getCircularReplacer"></a>

## getCircularReplacer() ⇒ <code>function</code>
Creates a replacer function for `JSON.stringify` that handles circular references.
It keeps track of objects seen using a WeakSet and returns undefined for duplicates.

**Kind**: global function  
**Returns**: <code>function</code> - A replacer function suitable for `JSON.stringify`.  
<a name="stringify"></a>

## stringify(item) ⇒ <code>string</code>
Converts a JavaScript value to a JSON string, safely handling circular references.
Uses `JSON.stringify` with a custom replacer to prevent errors with circular structures.

**Kind**: global function  
**Returns**: <code>string</code> - The JSON string representation of the value, handling circular references.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>\*</code> | The value to convert to a JSON string. |

<a name="toBoolean"></a>

## toBoolean(value, [defaultValue]) ⇒ <code>boolean</code> \| <code>\*</code>
Converts various input types (boolean, string, number) into a boolean value.
Recognizes common string representations ('1', 'TRUE', 'YES', 'Y' for true; '0', 'FALSE', 'NO', 'N' for false, case-insensitive).
Recognizes numbers 1 (true) and 0 (false).
If the input cannot be confidently converted, returns the provided default value.

**Kind**: global function  
**Returns**: <code>boolean</code> \| <code>\*</code> - The boolean representation of the input, or the defaultValue.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |
| [defaultValue] | <code>boolean</code> | The value to return if the input cannot be converted to boolean. |

<a name="toCamelCase"></a>

## toCamelCase(value) ⇒ <code>string</code>
Converts a string to camelCase.
First converts the string to snake_case, then transforms it to camelCase.
Handles single-character words and ensures the first character is lowercase.

**Kind**: global function  
**Returns**: <code>string</code> - The camelCase version of the string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to convert. |

<a name="toColumn"></a>

## toColumn(values) ⇒ <code>Array.&lt;string&gt;</code>
Formats an array of values (strings, numbers, booleans) into a single column of strings,
padded to the width of the longest value.
Filters out non-string/number/boolean values.
Converts numbers and booleans to their string representations.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of strings, each padded to the maximum width.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array.&lt;any&gt;</code> | The array of values to format. |

<a name="toEpoch"></a>

## toEpoch([date]) ⇒ <code>number</code>
Converts a Date object to its Unix epoch timestamp (seconds since Jan 1, 1970).

**Kind**: global function  
**Returns**: <code>number</code> - The Unix epoch timestamp in seconds.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>Date</code> | <code>new Date()</code> | The Date object to convert. Defaults to the current date and time. |

<a name="toGuidFormat"></a>

## toGuidFormat(value) ⇒ <code>string</code> \| <code>undefined</code>
Converts a value (potentially a GUID or UID) into the standard lowercase GUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).
If the value is already a valid GUID format, it's converted to lowercase.
If the value is a valid UID format (32 alphanumeric chars), it's formatted into a GUID string.
Returns undefined if the input is neither a valid GUID nor a valid UID format.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The formatted lowercase GUID string, or undefined if conversion is not possible.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string value to convert (expected GUID or UID format). |

<a name="toKebabCase"></a>

## toKebabCase(value) ⇒ <code>string</code>
Converts a string to kebab-case.
Handles various casing formats like camelCase, PascalCase, and strings with acronyms.
Uses a regex to split the string into parts and joins them with hyphens.

**Kind**: global function  
**Returns**: <code>string</code> - The kebab-case version of the string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to convert. |

<a name="toPascalCase"></a>

## toPascalCase(value) ⇒ <code>string</code>
Converts a string to PascalCase (also known as UpperCamelCase).
First converts the string to camelCase, then capitalizes the first letter.
Returns an empty string if the input is not a valid string.

**Kind**: global function  
**Returns**: <code>string</code> - The PascalCase version of the string, or an empty string if the input was invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to convert. |

<a name="toRequest"></a>

## toRequest(req) ⇒ <code>object</code> \| <code>undefined</code> \| <code>string</code> \| <code>object</code> \| <code>string</code> \| <code>Date</code> \| <code>undefined</code> \| <code>string</code> \| <code>undefined</code> \| <code>object</code> \| <code>undefined</code> \| <code>object</code>
Transforms a raw request object (presumably from an HTTP request) into a standardized request format.
Extracts path, request metadata (ID, date), token, session information, and the request body.
Removes internal properties like `_headers` and `_path` from the copied body.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - A standardized request object or undefined if the input is not a valid object.<code>string</code> - return.path - The request path.<code>object</code> - return.request - Request metadata.<code>string</code> - return.request.id - The request ID extracted from headers.<code>Date</code> \| <code>undefined</code> - return.request.date - The request date extracted and parsed from headers.<code>string</code> \| <code>undefined</code> - return.token - The authorization token (Bearer prefix removed).<code>object</code> \| <code>undefined</code> - return.session - The session object, potentially transformed.<code>object</code> - return.body - A copy of the request body with internal properties removed.  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The raw request object. |
| req._headers | <code>object</code> | The headers object within the request. |
| req._path | <code>string</code> | The path associated with the request. |

<a name="toResult"></a>

## toResult(result, sample) ⇒ <code>Array</code>
Returns a single item or an array based on the sample array

**Kind**: global function  
**Returns**: <code>Array</code> - The result array  

| Param | Type | Description |
| --- | --- | --- |
| result | <code>Array</code> | The result array |
| sample | <code>Array</code> | The sample array |

<a name="toSnakeCase"></a>

## toSnakeCase(value) ⇒ <code>string</code>
Converts a string to snake_case.
Handles various casing formats like camelCase, PascalCase, and strings with acronyms.

**Kind**: global function  
**Returns**: <code>string</code> - The snake_case version of the string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to convert. |

<a name="getColumnWidths"></a>

## getColumnWidths(lines, delimiter) ⇒ <code>Array.&lt;number&gt;</code>
Calculates the maximum width needed for each column based on the content in the lines.

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - An array of numbers representing the maximum width of each column.  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;string&gt;</code> | An array of strings, where each string represents a row and contains delimited columns. |
| delimiter | <code>string</code> | The character used to delimit columns within each line. |

<a name="addHeader"></a>

## addHeader(cache)
Adds a horizontal line separator to the table cache based on the calculated column widths.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cache | <code>object</code> | The cache object holding table construction state. |
| cache.widths | <code>Array.&lt;number&gt;</code> | Array of maximum column widths. |
| cache.lines | <code>Array.&lt;string&gt;</code> | Array storing the formatted lines of the table. |

<a name="addLine"></a>

## addLine(cache, lineParts)
Formats a single row (provided as an array of parts) and adds it to the table cache.
Pads each part according to the corresponding column width.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cache | <code>object</code> | The cache object holding table construction state. |
| cache.widths | <code>Array.&lt;number&gt;</code> | Array of maximum column widths. |
| cache.lines | <code>Array.&lt;string&gt;</code> | Array storing the formatted lines of the table. |
| lineParts | <code>Array.&lt;string&gt;</code> | An array of strings representing the parts of the current row. |

<a name="toTable"></a>

## toTable(lines, delimiter) ⇒ <code>Array.&lt;string&gt;</code>
Converts an array of delimited strings into a formatted text table with borders.
Inserts a header line after the first row.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of strings, representing the formatted lines of the text table.  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;string&gt;</code> | An array of strings, each representing a row with delimited columns. |
| delimiter | <code>string</code> | The character used to delimit columns. |

<a name="toUidFormat"></a>

## toUidFormat(value) ⇒ <code>string</code> \| <code>null</code>
Converts a value to a standardized UID format (32 uppercase alphanumeric characters).
It accepts values that are already in UID format or GUID format.
If the input value is not in either format, it returns null.
Otherwise, it cleans the string by removing non-alphanumeric characters and converts it to uppercase.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The formatted UID string (32 uppercase alphanumeric chars) or null if the input is invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The value to convert (expected to be in UID or GUID format). |

<a name="trimTop"></a>

## trimTop(lines) ⇒ <code>Array.&lt;any&gt;</code>
Trims leading elements from an array that are not valid strings (or are empty strings).
It removes elements from the beginning until the first valid string is encountered.
All subsequent elements (including non-valid strings) are kept.

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - A new array with leading non-valid-string elements removed.  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;any&gt;</code> | The array to trim from the top. |

<a name="trimBottom"></a>

## trimBottom(lines) ⇒ <code>Array.&lt;any&gt;</code>
Trims trailing elements from an array that are not valid strings (or are empty strings).
It reverses the array, trims from the top using `trimTop`, and then reverses it back.

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - A new array with trailing non-valid-string elements removed.  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;any&gt;</code> | The array to trim from the bottom. |

<a name="trim"></a>

## trim(lines) ⇒ <code>Array.&lt;any&gt;</code>
Trims both leading and trailing elements from an array that are not valid strings (or are empty strings).
Applies `trimTop` first, then `trimBottom` to the result.

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - A new array with leading and trailing non-valid-string elements removed.  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;any&gt;</code> | The array to trim from both ends. |

<a name="trimBrackets"></a>

## trimBrackets(value) ⇒ <code>string</code>
Recursively removes matching pairs of brackets ( (), [], {} ) from the start and end of a string.
Stops when the string is no longer enclosed in a matching bracket pair or becomes empty.

**Kind**: global function  
**Returns**: <code>string</code> - The string with all outer matching bracket pairs removed.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string potentially enclosed in brackets. |

<a name="trimString"></a>

## trimString(value) ⇒ <code>string</code>
Trims leading and trailing whitespace from a string.
If the input is not a valid string (including empty strings), it returns an empty string.

**Kind**: global function  
**Returns**: <code>string</code> - The trimmed string, or an empty string if the input was invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to trim. |

<a name="trimToNull"></a>

## trimToNull(value) ⇒ <code>string</code> \| <code>null</code>
Trims leading and trailing whitespace from a string.
If the resulting string is empty or the input was not a valid string, it returns null.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The trimmed string, or null if the result is empty or the input was invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to trim. |

<a name="trimToUndefined"></a>

## trimToUndefined(value) ⇒ <code>string</code> \| <code>undefined</code>
Trims leading and trailing whitespace from a string.
If the resulting string is empty or the input was not a valid string, it returns undefined.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The trimmed string, or undefined if the result is empty or the input was invalid.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to trim. |

<a name="undouble"></a>

## undouble(value, targets) ⇒ <code>string</code>
Replaces consecutive occurrences of specified target characters within a string with a single instance.
For example, undouble('a//b/c', '/') would return 'a/b/c'.

**Kind**: global function  
**Returns**: <code>string</code> - The processed string with doubled target characters reduced to one.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The input string to process. |
| targets | <code>string</code> \| <code>Array.&lt;string&gt;</code> | A string or array of single characters to "undouble". |

<a name="uniqueNumbers"></a>

## uniqueNumbers(values) ⇒ <code>Array.&lt;(number\|string)&gt;</code>
Filters an array to contain only unique numbers, preserving the original order.
Non-numeric elements are ignored.
It handles both number primitives and string representations of numbers.

**Kind**: global function  
**Returns**: <code>Array.&lt;(number\|string)&gt;</code> - A new array containing only the unique numeric values from the input, preserving their original types (number or string). Returns the original input if it's not a valid array.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array.&lt;any&gt;</code> | The array containing potential numbers. |

<a name="uniqueObjects"></a>

## uniqueObjects(values, [strict]) ⇒ <code>Array.&lt;object&gt;</code>
Filters an array to contain only unique objects, preserving the original order.
Non-object elements are ignored.
Uniqueness can be determined by strict equality (===) or by comparing stringified versions.

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - A new array containing only the unique objects from the input. Returns the original input if it's not a valid array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array.&lt;any&gt;</code> |  | The array containing potential objects. |
| [strict] | <code>boolean</code> | <code>true</code> | If true, uses strict equality for comparison. If false, compares based on JSON stringification. |

<a name="uniqueString"></a>

## uniqueString(values, [isCaseSensitive], [trim]) ⇒ <code>Array.&lt;string&gt;</code>
Filters an array to contain only unique strings, preserving the original order.
Non-string elements are ignored.
Offers options for case-sensitive comparison and trimming whitespace.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - A new array containing only the unique strings from the input. Returns the original input if it's not a valid array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array.&lt;any&gt;</code> |  | The array containing potential strings. |
| [isCaseSensitive] | <code>boolean</code> | <code>false</code> | If true, comparison is case-sensitive. Defaults to false. |
| [trim] | <code>boolean</code> | <code>true</code> | If true, trims whitespace from strings before comparison. Defaults to true. |

<a name="unique"></a>

## unique(values, [params]) ⇒ <code>Array.&lt;any&gt;</code> \| <code>null</code>
Creates a new array with unique values based on the predominant data type in the input array (numbers, objects, or strings).
It delegates to specialized unique functions (`uniqueNumbers`, `uniqueObjects`, `uniqueStrings`) based on the detected type.
If the array contains a mix of types or primarily non-primitive/non-object types, the behavior might be unexpected as it prioritizes numbers, then objects, then strings.
Returns null if the array doesn't contain numbers, objects, or valid strings.

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> \| <code>null</code> - A new array with unique values of the predominant type, or the original array if not valid, or null if no relevant types are found.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array.&lt;any&gt;</code> |  | The array from which to extract unique values. |
| [params] | <code>object</code> | <code>{}</code> | Optional parameters passed to the underlying unique functions. |
| [params.strict] | <code>boolean</code> | <code>true</code> | Used by `uniqueObjects`: If true, uses strict equality (===) for object comparison. |
| [params.isCaseSensitive] | <code>boolean</code> | <code>false</code> | Used by `uniqueStrings`: If true, string comparison is case-sensitive. |
| [params.trim] | <code>boolean</code> | <code>true</code> | Used by `uniqueStrings`: If true, trims whitespace from strings before comparison. |

<a name="unQuote"></a>

## unQuote(value) ⇒ <code>string</code>
Removes leading and trailing quote characters (") from a string, preserving any leading/trailing whitespace.
If the string is not valid, is less than 3 characters long after trimming, or doesn't start and end with a quote, the original value is returned.

**Kind**: global function  
**Returns**: <code>string</code> - The unquoted string or the original value if unquoting is not applicable.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to unquote. |

<a name="walkFolder"></a>

## walkFolder(folderPath, results)
Recursively walks a folder and collects the paths of files and subfolders relative to the root.
This is an internal helper function for `walk`.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>string</code> | The path of the folder to walk. |
| results | <code>object</code> | An object to store the results (files and folders lists). |
| results.root | <code>string</code> | The root path of the walk. |
| results.files | <code>Array.&lt;string&gt;</code> | An array to store relative file paths. |
| results.folders | <code>Array.&lt;string&gt;</code> | An array to store relative folder paths. |

<a name="walk"></a>

## walk(folderPath) ⇒ <code>object</code> \| <code>undefined</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;string&gt;</code>
Walks a directory recursively and returns an object containing lists of all files and folders found,
with paths relative to the starting folder.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>undefined</code> - An object with `root`, `folders`, and `files` properties, or undefined if the initial path is not a folder.<code>string</code> - return.root - The absolute path of the folder that was walked.<code>Array.&lt;string&gt;</code> - return.folders - An array of folder paths relative to the root.<code>Array.&lt;string&gt;</code> - return.files - An array of file paths relative to the root.  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>string</code> | The path of the directory to start walking from. |

<a name="writeFile"></a>

## writeFile(filePath, [contents]) ⇒ <code>boolean</code>
Writes content to a file, creating the necessary directory structure if it doesn't exist.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the file was written successfully, false otherwise.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filePath | <code>string</code> |  | The full path of the file to write to. |
| [contents] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The content to write to the file. Defaults to an empty string. |

<a name="writeLines"></a>

## writeLines(filePath, lines) ⇒ <code>Promise.&lt;boolean&gt;</code>
Writes an array of strings to a file, joining them with the OS-specific end-of-line character.
Filters out non-string elements from the input array.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise that resolves to true if the file was written successfully, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The full path of the file to write to. |
| lines | <code>Array.&lt;(string\|any)&gt;</code> | An array of lines to write. Non-string elements will be ignored. |

<a name="toResponse"></a>

## toResponse(original, response) ⇒ <code>Array</code> | <code>Object</code> | <code>*</code>
Formats a response based on the structure of the original input.
This utility helps create consistent responses by ensuring the response format
matches the original input structure:
- If original was an array, returns response as an array
- If original was an object and response is an object, returns the response object
- If response is an array with one item, extracts that single item

**Kind**: global function  
**Returns**: <code>Array</code> | <code>Object</code> | <code>*</code> - The formatted response data  

| Param | Type | Description |
| --- | --- | --- |
| original | <code>Object</code> \| <code>Array</code> | The original input structure |
| response | <code>*</code> | The processed response data to format |

<a name="cleanObject"></a>

## cleanObject(itemOrItems, [copyFirst]) ⇒ <code>Object</code> | <code>Array</code> | <code>*</code>
Recursively cleans an object or array by removing properties with `undefined` values.

**Kind**: global function  
**Returns**: <code>Object</code> | <code>Array</code> | <code>*</code> - The cleaned object/array, or the original input if not a valid object/array  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemOrItems | <code>Object</code> \| <code>Array</code> | | The object or array to clean |
| [copyFirst] | <code>boolean</code> | <code>false</code> | Whether to work on a copy of the input (true) or modify in place (false) |

