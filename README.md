# 🚀 Step-by-Step Guide to Setting Up a TypeScript Project

## **1️⃣ Create a New Project Folder**
```sh
mkdir my-ts-project
cd my-ts-project
```

## **2️⃣ Initialize a Node.js Project**
```sh
npm init -y
```
This creates a `package.json` file with default settings.

---

## **3️⃣ Install TypeScript**
```sh
npm install --save-dev typescript
```
This installs TypeScript as a development dependency.

---

## **4️⃣ Initialize TypeScript Configuration**
```sh
npx tsc --init
```
This generates a `tsconfig.json` file. 

🔹 **Modify `tsconfig.json` to include important settings:**
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```
- **`rootDir`:** Keep TypeScript files inside `src/`
- **`outDir`:** Compiled JavaScript files go into `dist/`

---

## **5️⃣ Create Project Structure**
Run:
```sh
mkdir src
```
Then, create a simple `index.ts` file inside `src/`:
```ts
// src/index.ts
console.log("Hello, TypeScript!");
```

---

## **6️⃣ Compile TypeScript Manually**
Run:
```sh
npx tsc
```
This compiles TypeScript into JavaScript inside the `dist/` folder.

Run the JavaScript output:
```sh
node dist/index.js
```

---

# **📌 Using `tsc --watch` for Auto Compilation**
If you want TypeScript to **automatically compile on file changes**, run:
```sh
npx tsc --watch
```
🔹 **How it Works:**
- This **monitors** changes in `.ts` files.
- Whenever you **save a file**, TypeScript **automatically recompiles**.

## **🔹 Can `tsc --watch` Show Outputs?**
**No**, `tsc --watch` **only compiles** TypeScript files. It does **not** execute the compiled JavaScript automatically.

## **How to See Outputs Automatically?**
Since `tsc --watch` **doesn't run JavaScript**, you can use **nodemon** for live execution.

---

## **7️⃣ Install `nodemon` for Auto Execution**
```sh
npm install --save-dev nodemon
```
Then, create a `nodemon.json` file:
```json
{
  "watch": ["dist"],
  "ext": "js",
  "exec": "node dist/index.js"
}
```

Now, open **two terminals**:
1️⃣ **Terminal 1** - Run TypeScript compiler in watch mode:
   ```sh
   npx tsc --watch
   ```
2️⃣ **Terminal 2** - Run `nodemon` to auto-execute JavaScript:
   ```sh
   npx nodemon
   ```

Now, when you change **`src/index.ts`**, it will:
- **Recompile automatically** using `tsc --watch`
- **Run the latest JavaScript output** using `nodemon`

---

# **🎯 Final Steps**
## **8️⃣ Add Scripts for Simplicity**
Modify `package.json`:
```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "concurrently \"tsc --watch\" \"nodemon\""
}
```
Then install **concurrently** to run both commands:
```sh
npm install --save-dev concurrently
```
Now, just run:
```sh
npm run dev
```
This will **watch for changes, recompile, and run the latest JavaScript automatically**.

---

# **✅ Summary of Important Commands**
| Command | Description |
|---------|------------|
| `npx tsc` | Compile TypeScript files manually |
| `npx tsc --watch` | Watch for changes and recompile automatically |
| `npx nodemon` | Watch for JavaScript changes and re-run the output |
| `npm run dev` | Run both `tsc --watch` and `nodemon` at the same time |

---

### 🚀 Now, You Have a Fully Functional TypeScript Setup! 🚀
