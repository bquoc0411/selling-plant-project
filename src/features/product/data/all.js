import others from "./others";
import flowers from "./flowers";
import { homeplants } from "./homeplants";
import { herbs } from "./herbs";

const all = flowers.concat(others, homeplants, herbs);

export default all;
