import { rem } from "polished"

const BASE_FONT_SIZE = 16
const remcalc = pxValue => rem(pxValue, BASE_FONT_SIZE)

export default remcalc
