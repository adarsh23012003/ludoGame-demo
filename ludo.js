class Board {
    #trackA = []
    #trackB = []
    #trackC = []
    #trackD = []
    #size
    #homeA = []
    #homeB = []
    #homeC = []
    #homeD = []
    #boardImg

    constructor(size, boardImg) {
        this.#boardImg = boardImg
        this.#size = size
        this.#trackAF(this.uz)
        this.#trackBF(this.uz)
        this.#trackCF(this.uz)
        this.#trackDF(this.uz)
        this.#homeAP(this.uz)
        this.#homeBP(this.uz)
        this.#homeCP(this.uz)
        this.#homeDP(this.uz)
    }

    get boardImg() {
        return this.#boardImg
    }

    get uz() {
        return this.#size / 15
    }
    #trackAF(uz) {
        this.#trackA[0] = { x: this.uz / 2 + this.uz, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[1] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[2] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[3] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[4] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[5] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 5 }
        this.#trackA[6] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 4 }
        this.#trackA[7] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 3 }
        this.#trackA[8] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 2 }
        this.#trackA[9] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 1 }
        this.#trackA[10] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 0 }
        this.#trackA[11] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 0 }
        this.#trackA[12] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 0 }
        this.#trackA[13] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 1 }
        this.#trackA[14] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 2 }
        this.#trackA[15] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 3 }
        this.#trackA[16] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 4 }
        this.#trackA[17] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 5 }
        this.#trackA[18] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[19] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[20] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[21] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[22] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[23] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 6 }
        this.#trackA[24] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[25] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[26] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[27] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[28] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[29] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[30] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[31] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 9 }
        this.#trackA[32] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 10 }
        this.#trackA[33] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 11 }
        this.#trackA[34] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 12 }
        this.#trackA[35] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 13 }
        this.#trackA[36] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 14 }
        this.#trackA[37] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 14 }
        this.#trackA[38] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 14 }
        this.#trackA[39] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 13 }
        this.#trackA[40] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 12 }
        this.#trackA[41] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 11 }
        this.#trackA[42] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 10 }
        this.#trackA[43] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 9 }
        this.#trackA[44] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[45] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[46] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[47] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[48] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[49] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 8 }
        this.#trackA[50] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[51] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[52] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[53] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[54] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[55] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 7 }
        this.#trackA[56] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 7 }
    }

    #trackBF(uz) {
        this.#trackB[0] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 1 }
        this.#trackB[1] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 2 }
        this.#trackB[2] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 3 }
        this.#trackB[3] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 4 }
        this.#trackB[4] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 5 }
        this.#trackB[5] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[6] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[7] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[8] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[9] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[10] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[11] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 7 }
        this.#trackB[12] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[13] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[14] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[15] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[16] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[17] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[18] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 9 }
        this.#trackB[19] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 10 }
        this.#trackB[20] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 11 }
        this.#trackB[21] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 12 }
        this.#trackB[22] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 13 }
        this.#trackB[23] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 14 }
        this.#trackB[24] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 14 }
        this.#trackB[25] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 14 }
        this.#trackB[26] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 13 }
        this.#trackB[27] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 12 }
        this.#trackB[28] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 11 }
        this.#trackB[29] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 10 }
        this.#trackB[30] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 9 }
        this.#trackB[31] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[32] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[33] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[34] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[35] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[36] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 8 }
        this.#trackB[37] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 7 }
        this.#trackB[38] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[39] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 6 }
        // ***********************
        this.#trackB[40] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[41] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[42] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[43] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 6 }
        this.#trackB[44] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 5 }
        this.#trackB[45] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 4 }
        this.#trackB[46] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 3 }
        this.#trackB[47] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 2 }
        this.#trackB[48] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 1 }
        this.#trackB[49] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 0 }
        this.#trackB[50] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 0 }
        this.#trackB[51] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 1 }
        this.#trackB[52] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 2 }
        this.#trackB[53] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 3 }
        this.#trackB[54] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 4 }
        this.#trackB[55] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 5 }
        this.#trackB[56] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 6 }


    }

    #trackCF(uz) {
        this.#trackC[0] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 13 }
        this.#trackC[1] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 12 }
        this.#trackC[2] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 11 }
        this.#trackC[3] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 10 }
        this.#trackC[4] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 9 }
        this.#trackC[5] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[6] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[7] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[8] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[9] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[10] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[11] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 7 }
        this.#trackC[12] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[13] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[14] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[15] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[16] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[17] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[18] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 5 }
        this.#trackC[19] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 4 }
        this.#trackC[20] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 3 }
        this.#trackC[21] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 2 }
        this.#trackC[22] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 1 }
        this.#trackC[23] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 0 }
        this.#trackC[24] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 0 }
        this.#trackC[25] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 0 }
        this.#trackC[26] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 1 }
        this.#trackC[27] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 2 }
        this.#trackC[28] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 3 }
        this.#trackC[29] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 4 }
        this.#trackC[30] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 5 }
        this.#trackC[31] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[32] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[33] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[34] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[35] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[36] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 6 }
        this.#trackC[37] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 7 }
        this.#trackC[38] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[39] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[40] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[41] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[42] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[43] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 8 }
        this.#trackC[44] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 9 }
        this.#trackC[45] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 10 }
        this.#trackC[46] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 11 }
        this.#trackC[47] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 12 }
        this.#trackC[48] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 13 }
        this.#trackC[49] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 14 }
        this.#trackC[50] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 14 }
        this.#trackC[51] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 13 }
        this.#trackC[52] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 12 }
        this.#trackC[53] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 11 }
        this.#trackC[54] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 10 }
        this.#trackC[55] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 9 }
        this.#trackC[56] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 8 }

    }

    #trackDF(uz) {
        this.#trackD[0] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[1] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[2] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[3] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[4] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[5] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 9 }
        this.#trackD[6] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 10 }
        this.#trackD[7] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 11 }
        this.#trackD[8] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 12 }
        this.#trackD[9] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 13 }
        this.#trackD[10] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 14 }
        this.#trackD[11] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 14 }
        this.#trackD[12] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 14 }
        this.#trackD[13] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 13 }
        this.#trackD[14] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 12 }
        this.#trackD[15] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 11 }
        this.#trackD[16] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 10 }
        this.#trackD[17] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 9 }
        this.#trackD[18] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[19] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[20] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[21] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[22] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[23] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 8 }
        this.#trackD[24] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[25] = { x: this.uz / 2 + this.uz * 0, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[26] = { x: this.uz / 2 + this.uz * 1, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[27] = { x: this.uz / 2 + this.uz * 2, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[28] = { x: this.uz / 2 + this.uz * 3, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[29] = { x: this.uz / 2 + this.uz * 4, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[30] = { x: this.uz / 2 + this.uz * 5, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[31] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 5 }
        this.#trackD[32] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 4 }
        this.#trackD[33] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 3 }
        this.#trackD[34] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 2 }
        this.#trackD[35] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 1 }
        this.#trackD[36] = { x: this.uz / 2 + this.uz * 6, y: this.uz / 2 + this.uz * 0 }
        this.#trackD[37] = { x: this.uz / 2 + this.uz * 7, y: this.uz / 2 + this.uz * 0 }
        this.#trackD[38] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 0 }
        this.#trackD[39] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 1 }
        this.#trackD[40] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 2 }
        this.#trackD[41] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 3 }
        this.#trackD[42] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 4 }
        this.#trackD[43] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 5 }
        this.#trackD[44] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[45] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[46] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[47] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[48] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[49] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 6 }
        this.#trackD[50] = { x: this.uz / 2 + this.uz * 14, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[51] = { x: this.uz / 2 + this.uz * 13, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[52] = { x: this.uz / 2 + this.uz * 12, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[53] = { x: this.uz / 2 + this.uz * 11, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[54] = { x: this.uz / 2 + this.uz * 10, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[55] = { x: this.uz / 2 + this.uz * 9, y: this.uz / 2 + this.uz * 7 }
        this.#trackD[56] = { x: this.uz / 2 + this.uz * 8, y: this.uz / 2 + this.uz * 7 }
    }

    #homeAP(uz) {
        this.#homeA[0] = { x: this.uz * 1.5 + this.uz / 2, y: this.uz * 1.6 + this.uz / 2 }
        this.#homeA[1] = { x: this.uz * 3.4 + this.uz / 2, y: this.uz * 1.6 + this.uz / 2 }
        this.#homeA[2] = { x: this.uz * 3.5 + this.uz / 2, y: this.uz * 3.5 + this.uz / 2 }
        this.#homeA[3] = { x: this.uz * 1.6 + this.uz / 2, y: this.uz * 3.5 + this.uz / 2 }
    }
    #homeBP(uz) {
        this.#homeB[0] = { x: this.uz * 10.5 + this.uz / 2, y: this.uz * 1.5 + this.uz / 2 }
        this.#homeB[1] = { x: this.uz * 12.4 + this.uz / 2, y: this.uz * 1.5 + this.uz / 2 }
        this.#homeB[2] = { x: this.uz * 10.5 + this.uz / 2, y: this.uz * 3.4 + this.uz / 2 }
        this.#homeB[3] = { x: this.uz * 12.4 + this.uz / 2, y: this.uz * 3.4 + this.uz / 2 }
    }
    #homeCP(uz) {
        this.#homeC[0] = { x: this.uz * 1.6 + this.uz / 2, y: this.uz * 10.5 + this.uz / 2 }
        this.#homeC[1] = { x: this.uz * 3.5 + this.uz / 2, y: this.uz * 10.4 + this.uz / 2 }
        this.#homeC[2] = { x: this.uz * 1.7 + this.uz / 2, y: this.uz * 12.4 + this.uz / 2 }
        this.#homeC[3] = { x: this.uz * 3.5 + this.uz / 2, y: this.uz * 12.4 + this.uz / 2 }
    }
    #homeDP(uz) {
        this.#homeD[0] = { x: this.uz * 10.6 + this.uz / 2, y: this.uz * 10.5 + this.uz / 2 }
        this.#homeD[1] = { x: this.uz * 12.5 + this.uz / 2, y: this.uz * 10.6 + this.uz / 2 }
        this.#homeD[2] = { x: this.uz * 10.6 + this.uz / 2, y: this.uz * 12.4 + this.uz / 2 }
        this.#homeD[3] = { x: this.uz * 12.5 + this.uz / 2, y: this.uz * 12.4 + this.uz / 2 }
    }

    getHome(color) {
        if (color === 'blue') {
            return this.#homeA
        } else if (color === 'green') {
            return this.#homeB
        } else if (color === 'red') {
            return this.#homeD
        } else if (color === 'yellow') {
            return this.#homeC
        }
    }
    getTrack(color) {
        if (color === 'blue') {
            return this.#trackA
        } else if (color === 'green') {
            return this.#trackB
        } else if (color === 'red') {
            return this.#trackD
        } else if (color === 'yellow') {
            return this.#trackC
        }
    }

    get trackA() {
        return this.#trackA
    }
    get trackB() {
        return this.#trackB
    }
    get trackC() {
        return this.#trackC
    }
    get trackD() {
        return this.#trackD
    }
    get uz() {
        return this.#size / 15
    }
    get size() {
        return this.#size
    }
}

class Pawns {
    #name
    #color
    #image
    #location
    #size
    constructor(name, color, image, size) {
        this.#name = name
        this.#color = color
        this.#image = image
        this.#location = location
        this.#size = size
    }
    get name() {
        return this.#name
    }
    get color() {
        return this.#color

    }
    get image() {
        return this.#image

    }
    get location() {
        return this.#location

    }
    set location({ x, y }) {
        this.#location = { x, y }
    }
    get size() {
        return this.#size
    }
    set size(s) {
        this.#size = s
    }
}

class Dice {
    constructor() {
    }
    roll = function () {
        const x = [1, 1, 2, 4, 5, 6, 6, 6, 3]
        const y = Math.ceil((Math.random() * x.length - 1))
        return x[y]
    }
}

class Players {
    #name
    #color
    constructor(name, color) {
        this.#name = name
        this.#color = color
    }

    get name() {
        return this.#name
    }
    get color() {
        return this.#color
    }
}

class Host {
    #board
    #pawns = []
    #dice
    #diceOutcome
    #players = []
    #chance = 1
    #turn = 0
    #btns = []
    #draw
    constructor(board, dice, draw) {
        this.#board = board
        this.#dice = dice
        this.#draw = draw
    }
    get players() {
        return this.#players
    }
    get chance() {
        return this.#chance
    }
    reduceChance = function () {
        this.#chance -= 1
    }
    increaseChance = function () {
        this.#chance += 1
    }

    int = function () {
        const number = prompt("Enter a players")
        if (number <= 4 && number > 1) {
            this.#draw.canvas.addEventListener('click', ({ offsetX, offsetY }) => {
                this.click(offsetX, offsetY)
            })
            for (let i = 1; i <= number; i++) {
                const data = prompt("Enter player name and color (YourName,colorName)")
                const [name, color] = data.split(",")
                const player = new Players(name, color)
                this.#players.push(player)
                const btn = document.getElementById(`${color}Btn`)
                btn.addEventListener("click", () => { this.game() })
                this.#btns.push(btn)
                let pawnImg = document.getElementById(`${color}Pawn`)
                let home = this.#board.getHome(color)
                let p1 = new Pawns(`${color}P1`, color, pawnImg, this.#board.uz)
                p1.location = home[0]
                console.log(home[0])
                let p2 = new Pawns(`${color}P2`, color, pawnImg, this.#board.uz)
                p2.location = home[1]
                console.log(home[1])
                let p3 = new Pawns(`${color}P3`, color, pawnImg, this.#board.uz)
                p3.location = home[2]
                console.log(home[2])
                let p4 = new Pawns(`${color}P4`, color, pawnImg, this.#board.uz)
                p4.location = home[3]
                console.log(home[3])
                this.#pawns.push([p1, p2, p3, p4])
                console.log(this.#pawns)
            }
            this.manageTurn()
            this.#draw.draw(this.#board, this.#pawns)
        } else {
            alert("Invalid input")
        }
    }

    click = (x, y) => {
        document.getElementById('dice').innerHTML = ""
        const pawns = this.#pawns[this.#turn]
        let clickedPawn
        for (let p = 0; p < pawns.length; p++) {
            // check for pawn hilight
            if (this.isHighlighted(pawns[p])) {
                // check for pawn click
                if (Math.abs(pawns[p].location.x - x) <= pawns[p].size / 2 && Math.abs(pawns[p].location.y - y) <= pawns[p].size / 2) {
                    clickedPawn = pawns[p]
                    break

                }
            }
        }
        // unhighlight
        pawns.forEach((p) => {
            this.unhighlightPawn(p)
        })

        if (clickedPawn) {
            this.move(clickedPawn)
        }
    }

    move = function (pawn) {
        const home = this.#board.getHome(pawn.color)
        const track = this.#board.getTrack(pawn.color)
        if (this.isHome(pawn, home)) {
            //going from track to home
            console.log("going from home to track")
            pawn.location.x = track[0].x
            pawn.location.y = track[0].y
        } else {
            // TODO: going from track to track
            console.log("moving")
            const positionIndex = this.nearRed(pawn, false) + this.#diceOutcome
            pawn.location.x = track[positionIndex].x
            pawn.location.y = track[positionIndex].y
            if (positionIndex === track.length - 1) {
                this.increaseChance()
            }
        }

        this.nextSetup()
    }

    nextSetup = function () {
        this.#btns[this.#turn].disabled = false
        this.manageTurn()
        this.#chance = 1
        this.#draw.draw(this.#board, this.#pawns)
    }

    isHighlighted = function (p) {
        return p.size > this.#board.uz
    }

    manageTurn = function () {
        if (this.#chance <= 0) {
            this.#btns[this.#turn].style.display = "none"
            this.#turn += 1
            if (this.#turn > this.#players.length - 1) {
                this.#turn = 0
            }
        }
        this.#btns[this.#turn].style.display = "block"
        // console.log(`trun is ${this.#turn}`)
    }

    isHome = function (pawn) {
        let flag = false
        const home = this.#board.getHome(pawn.color)
        home.forEach((h) => {
            if (pawn.location.x === h.x && pawn.location.y === h.y) {
                return flag = true
            }
        })
        return flag
    }

    highlightPawn(pawn) {
        if (!pawn) {
            return
        }
        pawn.size = this.#board.uz * 1.5
    }
    unhighlightPawn(pawn) {
        if (!pawn) {
            return
        }
        pawn.size = this.#board.uz
    }

    nearRed = function (p, x = true) {
        const track = this.#board.getTrack(p.color)
        for (let i = 0; i < track.length; i++) {
            if (Math.abs(track[i].x - p.location.x) < 0.1 && Math.abs(track[i].y - p.location.y) < 0.1) {
                if (!x) {
                    return i
                }
                return track.length - 1 - i
            }
        }
    }

    game = function () {
        this.#diceOutcome = this.#dice.roll()
        console.log(`Dice - ${this.#diceOutcome}`)
        document.getElementById('dice').innerHTML = this.#diceOutcome

        this.reduceChance()
        if (this.#diceOutcome === 6) {
            this.increaseChance()
        }
        // console.log(this.#players[this.#turn])

        const pawns = this.#pawns[this.#turn]
        const home = this.#board.getHome(pawns[0].color)

        let numberOfHighlightedPawns = 0

        // check for if any pawn is at home
        if (this.#diceOutcome === 6 || this.#diceOutcome === 1) {
            pawns.forEach((p) => {
                if (this.isHome(p)) {
                    this.highlightPawn(p)
                    numberOfHighlightedPawns += 1
                }
            })
        }

        pawns.forEach((p) => {
            if (!this.isHighlighted(p) && !this.isHome(p)) {
                if (this.#diceOutcome - this.nearRed(p) <= 0) {
                    this.highlightPawn(p)
                    numberOfHighlightedPawns += 1
                }
            }
        })

        if (numberOfHighlightedPawns) {
            // disble dice button
            this.#btns[this.#turn].disabled = true
        } else {
            this.nextSetup()
        }
        this.#draw.draw(this.#board, this.#pawns)
    }
}

class Draw {
    #canvas
    #context
    #size
    constructor(canvas, size) {
        this.#canvas = canvas
        this.#context = this.#canvas.getContext('2d')
        this.#size = size
    }
    draw = function (board, pawns) {
        this.#context.clearRect(0, 0, this.#size, this.#size)
        this.#context.drawImage(board.boardImg, 0, 0, size, size)
        pawns.forEach(px => {
            px.forEach((p) => {
                this.#context.drawImage(p.image, p.location.x - p.size / 2, p.location.y - p.size / 2, p.size, p.size)
            })
        });
    }
    get canvas() {
        return this.#canvas
    }
}

// canvas
const size = 730
const canvas = document.getElementById("canvas")
const boardImg = document.getElementById("boardImg")
canvas.height = size
canvas.width = size

// board
const board = new Board(size, boardImg)

const dice = new Dice()
const draw = new Draw(canvas, size)

const host = new Host(board, dice, draw)
host.int(host)