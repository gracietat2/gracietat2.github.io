// imageData.js

// const TatImg = [
//     "https://drive.google.com/uc?export=view&id=1GAfOY85kF2_l9vmDlscSnY1eQy4dt74v",
//     "https://drive.google.com/uc?export=view&id=1jZm1qv7dtJZVJ4-DlXqT33VUXioJZ3ky",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",
//     "https://drive.google.com/uc?export=view&id=",

//   ];
  
const TatImg = [
    "https://drive.google.com/uc?export=view&id=1ZYKVPfjejuQlbLF4MNx6SBwdGjtLH96h",
    "https://drive.google.com/uc?export=view&id=1x5iambgsr2uqwBeZYdMjqLWLKPWSAK1q",
    "https://drive.google.com/uc?export=view&id=1fMZuzoHkC8VTlDJZxPhYc9j7JN3sXL3G",
    "https://drive.google.com/uc?export=view&id=1l3DvHgJdf3N5X4hTb2QZCaccJrzblTYp",
    "https://drive.google.com/uc?export=view&id=1fM-3zvEFJdKH2jvHxSZObWjQNKOQm4F1",
    "https://drive.google.com/uc?export=view&id=1w-4NtMYXt-657UwHE-mfZ0dyXQACx3A_",
    "https://drive.google.com/uc?export=view&id=1eBigQvi7uPu-ID6KNTZF6E20D1T9U-zt",
    "https://drive.google.com/uc?export=view&id=1HBiOympCIhgZxMpmg6G70Vy34kP8M-sT",
    "https://drive.google.com/uc?export=view&id=1nyq6m-2BNNngjZh1RyduQQ3TQkSjQxYT",
    "https://drive.google.com/uc?export=view&id=1d55F_dbQ6Ukw4k7Irrb0tOwz8aW8YzEc",
    "https://drive.google.com/uc?export=view&id=1e5XYrjWxQQ7vK3EByi9aipH6YjJhe4mt",
    "https://drive.google.com/uc?export=view&id=1xRho_CgNhq5G0fkhbHKBSEOEIfWJy0nz",
    "https://drive.google.com/uc?export=view&id=15AowOHlkAV1FHMK263RnLU9sCj8BC6yC",
    "https://drive.google.com/uc?export=view&id=1nZo8Iz7MDmGlDCkkyAFVE_uf3aptlj_A",
    "https://drive.google.com/uc?export=view&id=1lRqVrixh-lZ2M_oedEvrqE4fuDBytjq0",
    "https://drive.google.com/uc?export=view&id=1fU4C3LYgcCb0IR30A3t1rdMIZBt0Iqp0",
    "https://drive.google.com/uc?export=view&id=1W4NZ6XneydA87CIp8uWfrcvu9uFk5NAX",
    "https://drive.google.com/uc?export=view&id=1NYazjyGa01n5SF3OUyZLnWhL-AcesRnC",
    "https://drive.google.com/uc?export=view&id=1ZJpZsZ_5vbfX0sDyu28DW3zminNpjEC0",
    "https://drive.google.com/uc?export=view&id=16zK-b7u8r8MORNhnjOhd8R6XNwRVYJ6z",
    "https://drive.google.com/uc?export=view&id=1WVFSIAqZ_0XphgvHS33twf8_YtcF2KrB",
    "https://drive.google.com/uc?export=view&id=1nbG64OgTbuipjtbvOjsp93Hjk3_IUCH2",
    "https://drive.google.com/uc?export=view&id=11rHkfzGEm47KRSLHpD8B4Wq742AhoRSS",
    "https://drive.google.com/uc?export=view&id=1-wtCdPA0kyUcGB02Hqd2IICjVjjUWUQN",
    "https://drive.google.com/uc?export=view&id=1xEpmY9IJD9X2zzrWCvCLW5f9ngdLmXYt",
    "https://drive.google.com/uc?export=view&id=1K5wF__VLIQQwpaJ1bJyyfjTrBCMWh8KQ",
    "https://drive.google.com/uc?export=view&id=1cqRZvpUZCIgY0Ms_sfjDcICWKEbgDkTk",
    "https://drive.google.com/uc?export=view&id=1bqzEvMKKEhFsiBFQbPxHLdwX1dw6NLd1",
    "https://drive.google.com/uc?export=view&id=15-jEfmrWpLTNDLcqnATx2jBJ7Vhn-TLq",
    "https://drive.google.com/uc?export=view&id=1YRZ0_eyrebr85tdu-OWTrL3kPhSU0jrZ",
    "https://drive.google.com/uc?export=view&id=1vRt3OnOmLYuYtgxVwpd-VXY212Bjuabh",
    "https://drive.google.com/uc?export=view&id=1NoG9kGneUycwhxks6IQ239EtPIXTEi9k",
    "https://drive.google.com/uc?export=view&id=1NC44PtC2xZzvTtzuahpefGIxCRIs9pwB",
    "https://drive.google.com/uc?export=view&id=1J_0iSE6-gDCUNBEG6j8RPB7NbW0ku8ca",
    "https://drive.google.com/uc?export=view&id=12G_VtS5unNHb7hAm2J8GI7uLcvHhCAmw",
    "https://drive.google.com/uc?export=view&id=1pcTBAFQQycRj6VOOxvgjJRhCOdDVrAy2",
    "https://drive.google.com/uc?export=view&id=13ioy4tOf_IaoPBGstRv0vQFvC4UmkJ-D",
    "https://drive.google.com/uc?export=view&id=1EM2hgykQTotQIP3fLJdXQzSt2HxgFi6U",
    "https://drive.google.com/uc?export=view&id=1PgI38U3TRo0GRG_IrBcR4d3PsMlS2Ftx",
    "https://drive.google.com/uc?export=view&id=1isDDql1EYcy1Gs4YhGdsLYiem5bgNOBY",
    "https://drive.google.com/uc?export=view&id=1iy76LQO7gbqdmVhqrrzbAZjJL-DDlA4N",
    "https://drive.google.com/uc?export=view&id=17KFATUdkvesllx14Q-hSsYRUaaS_YGAP",
    "https://drive.google.com/uc?export=view&id=1e9TGYMJE1qQXNRICGhIQZUyTho7JfDgL",
    "https://drive.google.com/uc?export=view&id=1id_fgKD1XVb33eBkvQI4qSVsk1Z1vq-W",
    "https://drive.google.com/uc?export=view&id=10CrnwQ1rPtYtXlaJE16rVLRzKMc3ddx6",
    "https://drive.google.com/uc?export=view&id=1p4C-_mKUVjqbzqgUrBlV-WJrKyKfuQiL",
    "https://drive.google.com/uc?export=view&id=1m0S3hy12MbpczdQdFxU_q5kLMapQXiqs",
    "https://drive.google.com/uc?export=view&id=1Y8E-VynzqC10vcArt_CCbbs_8148mbzb",
    "https://drive.google.com/uc?export=view&id=1-AQr7_iNJLrojpUYsj-Fm7KClnmjYJ_1",
    "https://drive.google.com/uc?export=view&id=1SA14zD7DpqUNlFfh8AsH3IlNRbZoavdR",
    "https://drive.google.com/uc?export=view&id=1sEztBZLAT9TiAhe_M_1zUn2rlcDVFHNu",
    "https://drive.google.com/uc?export=view&id=1XZYihnxLekhM8se35Dl2-k1k0RbS3ltQ",
    "https://drive.google.com/uc?export=view&id=1_BbJfQAIa8fYoSGAQVYpLuOLBx40Wxso",
    "https://drive.google.com/uc?export=view&id=1Ol2Hzta7VHSdbF0n9yZGnZKqhehMLM4K",
    "https://drive.google.com/uc?export=view&id=1vaA8PRVvesAA-eNi3SBrRqrcYocPkCNj",
    "https://drive.google.com/uc?export=view&id=1tgut8B7OVK_vTnZpwb64iJKpQ6IRJU6e",
    "https://drive.google.com/uc?export=view&id=1zPUSONZmrxfCBf9pOJwttajVDHifgL5_",
    "https://drive.google.com/uc?export=view&id=1CK1LO-j1Q2O4T5NlOcIas3XXEbr9HWYF"
  ];
  

  export default TatImg;