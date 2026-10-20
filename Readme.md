project setup:
1st step:
npm init -y
2nd step:
npm i -D typescript
3rd step
npx tsc --init

difference between npx tsc and npx ts-node src/index.ts

difference between type annotation and type inference
1. Type Annotation : return value-এর type স্পষ্টভাবে লিখে দাও
2. Type Inference : type স্পষ্টভাবে না লিখলেও TypeScript value দেখে নিজে type নির্ধারণ করে,


//  unknown type        [shurute any er moto achoron kore ,mane type declare na korlew error dey na. but use korar age obosshoi type ditei hobe.]
// documentation : https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type
// search difference between any and unknown in typescript



type
Reusable type বা structure তৈরি করে।

যেমন: type Tea = { water: number }


interface
Object বা class-এর জন্য structure/contract define করে।

যেমন: interface Tea { water: number }


implements
Class নির্দিষ্ট structure মেনে চলছে কি না, সেটা check করে।

যেমন: class Chai implements Tea { water = 100 }