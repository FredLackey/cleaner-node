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
<dt><a href="#getIds">getIds(itemsOrIds)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Converts an array of items or IDs into an array of IDs.</p>
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
<dd><p>Extracts a UID (or optionally a GUID) from an item or returns the input if it's already a valid UID/GUID format.
Checks for a <code>uid</code> property within an object if the input is an object.</p>
</dd>
<dt><a href="#getUids">getUids(items, [strict])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Converts an array of items into an array of UIDs (unique identifiers).</p>
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
</dl>

<a name="getFolderContents"></a>

## getFolderContents(folderPath) ⇒ <code>Array.&lt;string&gt;</code> | <code>undefined</code>
Synchronously reads the contents of a directory and returns an array of full paths for its direct children.
Similar to `getFiles`, but returns `undefined` instead of `null` on error or invalid input.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> | <code>undefined</code> - An array of full paths of items within the directory, or undefined if the path is invalid or an error occurs.  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>string</code> | The path to the directory. |

<a name="getIds"></a>

## getIds(itemsOrIds) ⇒ <code>Array.&lt;string&gt;</code>
Converts an array of items or IDs into an array of IDs.

Each item in the input array is processed by the `getId` function.
If an element is already an ID (string), it's returned as is.
If an element is an object, `getId` will attempt to extract its ID.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of string IDs.  

| Param | Type | Description |
| --- | --- | --- |
| itemsOrIds | <code>Array.&lt;Object\|string&gt;</code> | An array containing objects or string IDs. |

<a name="getHash"></a>

## getHash(value) ⇒ <code>string</code>
Calculates the MD5 hash of a given string value.

**Kind**: global function  
**Returns**: <code>string</code> - The MD5 hash of the input value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The input string to hash. |
