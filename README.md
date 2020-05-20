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
|  0.6.0  |  2019/04/06  |  Add `express` area with `.asyncMiddleware` wrapper / function.  |
|  0.6.4  |  2019/04/12  |  Add `.isJSON` to `strings`.  |
|  0.6.5  |  2019/04/16  |  Add `.getSize` to `strings`.  |
|  0.6.7  |  2019/04/26  |  Add `.reduce` to `objects` to remove useless properties.  |
|  0.6.12  |  2019/10/01  |  Add `.isEmpty` to `objects` to differentiate between empty and invalid.  |
|  0.6.13  |  2019/10/08  |  Add `.createPath` to `files` to create folder path with clean boolean feedback.  |  
|  0.6.14  |  2019/10/08  |  Extended `.writeFile` in `files` to create folder path (optional).  |
|  0.7.0  |  2019/10/08  |  Enhanced file locking operations within `files`.  |
|  0.7.3  |  2020/01/14  |  Add `objects.likeKeys` and `likeKey` to find keys of an object where case or format is unknown.  |  
|  0.8.0  |  2020/01/16  |  Add `env` methods.  |  
|  0.8.1  |  2020/01/17  |  Add `.print` and `.toPrintable` to `object`.  |  
|  0.8.2  |  2020/01/17  |  Add `MODULE_PATH`, `PACKAGE`, and `PACKAGES` to `env`.  |  
|  0.8.3  |  2020/01/18  |  Add `MODULE_NAME`, `MODULE_DESC`, and `MODULE_VER` to `env`.  |  
|  0.8.5  |  2020/01/18  |  Add `fromHtml` to `strings`.  |  
|  0.8.6  |  2020/01/18  |  Improve `booleans` logic.  |  
|  0.8.8  |  2020/01/21  |  Improve `errors` logic.  |  
|  0.8.9  |  2020/01/27  |  Fix `.env` logic for test cases.  |  
|  0.8.10  |  2020/01/28  |  Improve `env` logic.  |  
|  0.8.13  |  2020/02/06  |  All `apply` to `env`.  |  
|  0.8.14  |  2020/03/11  |  All `remove` to `objects`.  |  
|  0.8.17  |  2020/04/02  |  Extend `errors.init` to separate error details from the message.  |  
|  0.8.18  |  2020/04/18  |  Rename `objects.reduce` to `objects.prune`.  |  
|  0.9.0  |  2020/05/14  |  Add `files.readLines`.  |  
|  0.9.2  |  2020/05/19  |  Add `arrays.toResult`.  |  
|  0.9.3  |  2020/05/19  |  Add `strings.toSnakeCase`.  |  
|  0.9.4  |  2020/05/20  |  Add `files.copyFile` && `files.moveFile`.  |  
|  0.9.5  |  2020/05/20  |  Add `files.isEmptyFolder` && `files.pruneFolders`.  |  
