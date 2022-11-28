import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

// ✅ write to file SYNCHRONOUSLY
function syncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  writeFileSync(join(__dirname, filename), data, {
    flag: 'w',
  });

  const contents = readFileSync(join(__dirname, filename), 'utf-8');
  console.log(contents); // 👉️ "One Two Three Four"

  return contents;
}

syncWriteFile('./example1.txt', 'One\nTwo\nThree\nFour');

// --------------------------------------------------------------

// ✅ write to file ASYNCHRONOUSLY
async function asyncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = await fsPromises.readFile(
      join(__dirname, filename),
      'utf-8',
    );
    console.log(contents); // 👉️ "One Two Three Four"

    return contents;
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
}

asyncWriteFile('./example2.txt', 'One\nTwo\nThree\nFour');