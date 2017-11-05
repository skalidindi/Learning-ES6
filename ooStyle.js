var _ = require('lodash');

// class File {
//   constructor(filename, fileSize, isWriteable) {
//     this.filename = filename;
//     this.fileSize = fileSize;
//     this.isWriteable = isWriteable;
//   }

//   setWriteableToTrue() {
//     this.isWriteable = true;
//   }
// }

// class Directory extends File {
//   constructor(filename, fileSize, isWriteable, files) {
//     super(filename, fileSize, isWriteable);
//     this.files = files;
//   }

//   setWriteableToTrue() {
//     super.setWriteableToTrue();
//     this.files.forEach(function(file) {
//       file.setWriteableToTrue();
//     });
//   }
// }

// let file1 = new File("file1", 100, false);
// let file2 = new File("file2", 100, false);
// let file3 = new File("file3", 100, false);
// let file4 = new File("file4", 100, false);
// let directory2 = new Directory("directory2", 100, false, [file3, file4]);
// let directory1 = new Directory("directory1", 100, false, [file1, directory2, file2]);

// console.log(directory1);
// directory1.setWriteableToTrue();
// console.log(directory1);

var OldFile = (function () {
  function OldFile(filename, fileSize, isWriteable) {
    this.filename = filename;
    this.fileSize = fileSize;
    this.isWriteable = isWriteable;
  }
  OldFile.prototype.setWriteableToTrue = function () {
    return this.isWriteable = true;
  };
  return OldFile;
}());

var OldDirectory = (function (_super) {
  _.extend(OldDirectory, _super);
  function Directory(filename, fileSize, isWriteable, files) {
    var _this = _super.call(this, filename, fileSize, isWriteable) || this;
    _this.files = files;
    return _this;
  }
  return OldDirectory;
}(OldFile));

let oldFile1 = new OldFile("oldFile1", 100, false);
let oldFile2 = new OldFile("oldFile2", 100, false);
let oldFile3 = new OldFile("oldFile3", 100, false);
let oldFile4 = new OldFile("oldFile4", 100, false);
let oldDirectory2 = new OldDirectory("oldDirectory2", 100, false, [oldFile3, oldFile4]);
let oldDirectory1 = new OldDirectory("oldDirectory1", 100, false, [oldFile1, directory2, oldFile2]);

console.log(oldDirectory1);
