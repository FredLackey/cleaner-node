# cleaner-node
Helpful utilities and scripts to make Node projects more legible and easier for the next developer to take over.

## Changes

|  Version  |  Date  |  Description  |
|-----------|--------|---------------|
|  0.3.5  |  2019/02/17  |  Add `objects.getValue`, `getValues`, and `setValue` to get & set properties of an object using fully qualified path names.  |
|  0.3.6  |  2019/02/18  |  Add `strings.getByteCount` to determine true size of string rather than simply using `.length`.  |
|  0.3.7  |  2019/02/26  |  Add `files` utility.  |
|  0.4.0  |  2019/02/27  |  Add `.fileContents`, `.lock`, `.unlock`, `.isLocked`, `.cleanLock` functions to `files`.  |
|  0.4.3  |  2019/03/16  |  Add `folderStructure` to `files` for producing a object graph from a single folder path.  |
|  0.4.4  |  2019/03/16  |  Add `isSemver` to `strings` for determining if a string is a valid semver format.  |
|  0.4.7  |  2019/03/17  |  Add `getName` to `email` for extracting cosmetic name from verbose email address.  |
|  0.4.8  |  2019/03/17  |  Add `.isBracketted`, `.getBracket`, and `.trimBrackets` to `strings`.  |
|  0.5.0  |  2019/03/28  |  Add `sequelize` helper functions.  |
