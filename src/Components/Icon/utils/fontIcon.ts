/** 定义 icon 的类型 */
export interface IconDefinedType {
  iconName: string;
  prefix?: string;
  //   viewBox="0 0 1024 1024"   svg绘图区域  min x  min y  width  height
  /**
   * 0: width
   * 1: height
   * 2:
   * 3:
   * 4: 图标 svg 路径
   */
  icon: [number, number, never[], string, string];
}

/** 定义 icon */

const font_size: IconDefinedType = {
  iconName: "font_size",
  icon: [
    1358,
    1024,
    [],
    "",
    "M1146.69714297 404.05333332H729.05142897a36.571429 36.571429 0 0 0 0 73.142857h174.08v382.537143a36.571429 36.571429 0 0 0 73.142857 0V472.80761932h174.08a36.571429 36.571429 0 0 0 0-73.142857z M898.74285697 186.08761932a34.377143 34.377143 0 1 0 0-68.754286H194.37714297a34.377143 34.377143 0 0 0 0 68.754286h317.44v669.988571a35.108571 35.108571 0 0 0 35.108571 34.377143 34.377143 34.377143 0 0 0 34.377143-34.377143V186.08761932z",
  ],
};

const font_bold: IconDefinedType = {
  iconName: "font_bold",
  icon: [
    1024,
    1024,
    [],
    "",
    "M258.998857 885.979429V138.020571h315.757714c34.816 0 76.068571 21.723429 107.739429 55.881143 37.376 40.594286 57.929143 93.915429 57.417143 149.065143 0 58.002286-21.138286 109.568-56.832 148.48 19.894857 9.362286 39.350857 22.893714 56.393143 39.424a206.628571 206.628571 0 0 1 47.762285 231.862857 206.701714 206.701714 0 0 1-47.689142 68.315429c-34.450286 33.426286-78.774857 54.491429-115.785143 54.857143H258.998857z m71.972572-72.045715h291.693714c16.896 0 44.617143-13.019429 66.779428-34.596571a135.021714 135.021714 0 0 0 0-196.754286c-22.089143-21.357714-49.517714-34.377143-66.413714-34.596571H330.971429v265.947428z m0-337.92h243.785142a54.198857 54.198857 0 0 0 22.235429-7.168c11.117714-5.924571 22.528-14.774857 32.621714-25.673143 25.088-27.282286 38.838857-63.122286 38.326857-100.205714a144.822857 144.822857 0 0 0-38.326857-100.132571 125.293714 125.293714 0 0 0-32.694857-25.6 55.149714 55.149714 0 0 0-21.869714-7.314286H330.971429v266.093714z",
  ],
};
const font_incline: IconDefinedType = {
  iconName: "font_incline",
  icon: [
    1024,
    1024,
    [],
    "",
    "M589.531429 212.699429l-74.898286 618.422857h87.113143a29.988571 29.988571 0 0 1 0 59.830857H362.422857a29.915429 29.915429 0 1 1 0-59.830857h91.940572l74.971428-618.422857H442.148571a29.988571 29.988571 0 0 1 0-59.830858h239.396572a29.988571 29.988571 0 1 1 0 59.830858H589.604571z",
  ],
};

const font_underline: IconDefinedType = {
  iconName: "font_underline",
  icon: [
    1024,
    1024,
    [],
    "",
    "M732.013714 813.933714a35.986286 35.986286 0 1 1 0 71.972572H291.986286a36.059429 36.059429 0 0 1 0-71.972572h440.027428z m0-675.986285c19.675429 0 35.620571 15.725714 35.986286 35.401142v278.162286c0 176.786286-92.525714 284.452571-256 284.452572-161.792 0-254.098286-105.618286-256-279.186286V174.08a35.986286 35.986286 0 1 1 72.045714-0.585143v278.235429c0 69.339429 16.237714 123.026286 46.665143 158.427428 30.281143 35.328 75.776 53.906286 137.289143 53.906286 61.44 0 106.934857-18.651429 137.289143-53.906286 30.134857-35.108571 46.372571-87.990857 46.665143-156.379428V174.006857c0-19.894857 16.164571-35.986286 36.059428-35.986286v-0.073142z",
  ],
};

const font_deleteLine: IconDefinedType = {
  iconName: "font_deleteLine",
  icon: [
    1024,
    1024,
    [],
    "",
    "M656.237714 860.306286l-3.364571 1.316571-1.462857 0.731429c-80.676571 34.816-190.902857 34.304-281.6-1.901715a36.205714 36.205714 0 0 1-3.364572-1.462857c-81.188571-42.276571-126.976-104.228571-135.314285-183.808a36.059429 36.059429 0 0 1 71.606857-7.972571v0.585143c5.632 53.686857 35.84 94.939429 95.085714 126.317714l0.219429 0.146286 0.585142 0.219428c72.923429 28.306286 162.157714 28.525714 224.109715 1.755429l1.828571-0.804572a36.790857 36.790857 0 0 1 1.974857-0.804571c49.444571-18.578286 81.92-52.150857 91.501715-90.331429 9.362286-37.229714-3.730286-76.214857-39.789715-108.397714a102.326857 102.326857 0 0 0-32.182857-19.894857h111.177143c74.093714 100.352 29.622857 232.813714-100.937143 284.306286z m203.776-384.292572a36.059429 36.059429 0 0 1 0 71.972572H163.986286a35.986286 35.986286 0 0 1 0-71.972572h696.027428zM651.702857 163.693714a25.380571 25.380571 0 0 1 3.364572 1.462857c79.652571 42.276571 124.562286 104.301714 132.681142 183.661715a35.986286 35.986286 0 0 1-71.606857 7.899428V356.205714c-5.485714-53.394286-34.523429-94.354286-91.355428-125.513143l-1.901715-1.024-0.512-0.219428c-71.094857-28.233143-158.134857-28.379429-218.404571-1.828572l-1.828571 0.804572a36.205714 36.205714 0 0 1-1.974858 0.804571c-48.274286 18.505143-80.018286 52.077714-89.307428 90.331429-9.216 37.376 3.657143 76.580571 38.985143 108.763428 9.142857 8.338286 18.578286 14.628571 30.939428 19.675429h-109.714285c-72.777143-100.278857-29.257143-232.594286 98.962285-284.233143l3.291429-1.316571 1.462857-0.731429c79.286857-34.889143 187.757714-34.377143 276.918857 1.901714z",
  ],
};

const font_color: IconDefinedType = {
  iconName: "font_color",
  icon: [
    1024,
    1024,
    [],
    "",
    "M835.49426857 904.79660997a36.61016924 36.61016924 0 0 0-23.64406789-9.9152543H210.83325136a36.61016924 36.61016924 0 0 0-23.64406787 9.9152543 32.79660997 32.79660997 0 0 0-9.15254208 23.64406786 35.84745791 35.84745791 0 0 0 9.15254208 23.64406787 36.61016924 36.61016924 0 0 0 23.64406788 9.9152543h601.01694931a33.55932217 33.55932217 0 0 0 33.55932217-33.55932217 33.55932217 33.55932217 0 0 0-9.9152543-23.64406786zM219.22308213 787.33898281a32.03389863 32.03389863 0 0 0 11.44067784 8.38983076 35.84745791 35.84745791 0 0 0 12.96610136 0 36.61016924 36.61016924 0 0 0 13.72881357 0 44.23728779 44.23728779 0 0 0 11.44067783-8.38983076 61.01694932 61.01694932 0 0 0 6.10169504-12.20338916l99.15254295-247.11864433h274.57627061l99.15254297 246.35593213a29.74576289 29.74576289 0 0 0 12.20338916 15.25423711 36.61016924 36.61016924 0 0 0 18.30508506 5.33898281 26.69491494 26.69491494 0 0 0 12.96610135 0 29.74576289 29.74576289 0 0 0 17.54237286-17.54237285 25.16949141 25.16949141 0 0 0 0-12.96610137 24.40678009 24.40678009 0 0 0 0-12.20339004L541.85020068 81.83050859a32.03389863 32.03389863 0 0 0-12.20339003-14.49152578 34.32203349 34.32203349 0 0 0-36.61016924 0 32.03389863 32.03389863 0 0 0-12.20339004 14.49152578l-159.4067792 396.61016924v6.86440723L213.88409844 749.20339003a25.93220362 25.93220362 0 0 0-3.81355928 12.96610138 28.22033935 28.22033935 0 0 0 0 13.72881357 30.50847422 30.50847422 0 0 0 9.15254297 11.44067783zM511.34172558 184.03389865l110.5932208 276.86440633h-221.18644071z",
  ],
};

const font_background: IconDefinedType = {
  iconName: "font_background",
  icon: [
    1024,
    1024,
    [],
    "",
    "M871.497143 685.129143A596.845714 596.845714 0 0 0 802.377143 563.2l62.537143-58.806857a68.608 68.608 0 0 0 1.609143-98.011429L549.302857 89.088A54.637714 54.637714 0 0 0 510.317714 73.142857h-0.877714a54.710857 54.710857 0 0 0-39.350857 17.261714L84.114286 502.857143a40.301714 40.301714 0 0 0 0.950857 56.246857l308.004571 308.004571a58.88 58.88 0 0 0 82.066286 1.609143l45.568-42.422857a189.513143 189.513143 0 0 0 373.467429-46.518857 271.725714 271.725714 0 0 0-22.674286-94.646857zM512 136.338286c3.730286 0 7.314286 1.462857 10.020571 4.096l248.978286 248.905143H270.848l230.692571-248.32A12.580571 12.580571 0 0 1 512 136.338286z m191.707429 776.045714a134.582857 134.582857 0 0 1-134.217143-134.217143v-2.194286c3.072-25.819429 9.508571-51.2 18.870857-75.410285a431.542857 431.542857 0 0 1 57.563428-98.084572c14.409143-19.748571 29.842286-39.277714 44.909715-57.782857l9.508571-11.995428a16.676571 16.676571 0 0 1 3.072-3.803429l0.292572-0.292571a28.525714 28.525714 0 0 1 3.510857 5.046857c2.194286 3.145143 4.973714 6.290286 7.533714 9.435428 5.12 5.851429 9.874286 12.214857 14.116571 18.870857 4.388571 5.339429 8.484571 11.264 12.873143 16.969143 4.388571 5.632 8.777143 11.922286 13.531429 17.92 2.413714 2.194286 4.388571 4.900571 5.997714 7.826286 23.113143 31.158857 42.422857 64.877714 57.490286 100.571429 11.702857 23.405714 18.066286 49.005714 18.870857 75.117714a132.534857 132.534857 0 0 1-133.851429 132.022857z m115.712-441.636571l-52.150858 49.371428a204.8 204.8 0 0 0-17.334857-20.48 210.578286 210.578286 0 0 0-20.114285-22.235428c-2.194286-2.194286-4.096-4.096-4.681143-4.096v-2.56l-21.430857-24.502858-19.748572 22.674286a32.621714 32.621714 0 0 0-6.948571 9.069714c-6.875429 6.656-13.312 13.824-19.163429 21.357715-19.163429 23.625143-38.985143 47.835429-56.612571 73.874285-24.283429 35.108571-45.421714 72.411429-63.122286 111.323429a265.874286 265.874286 0 0 0-19.821714 70.729143l-76.726857 70.948571a7.899429 7.899429 0 0 1-10.971429-0.219428L142.921143 538.331429a11.264 11.264 0 0 1-0.365714-15.725715l73.289142-78.555428h608.841143a14.409143 14.409143 0 0 1 4.096 10.678857 29.696 29.696 0 0 1-9.508571 16.091428z",
  ],
};

const font_aline_left: IconDefinedType = {
  iconName: "font_aline_left",
  icon: [
    1024,
    1024,
    [],
    "",
    "M43.885714 0a43.885714 43.885714 0 1 0 0 87.771429h390.070857a43.885714 43.885714 0 0 0 0-87.771429H43.885714zM43.885714 936.228571a43.885714 43.885714 0 1 0 0 87.771429h877.714286a43.885714 43.885714 0 0 0 0-87.771429H43.885714zM0 355.986286a43.885714 43.885714 0 0 1 43.885714-43.885715h877.714286a43.885714 43.885714 0 0 1 0 87.771429H43.885714a43.885714 43.885714 0 0 1-43.885714-43.885714zM43.885714 624.128a43.885714 43.885714 0 1 0 0 87.771429h390.070857a43.885714 43.885714 0 0 0 0-87.771429H43.885714z",
  ],
};

const font_aline_center: IconDefinedType = {
  iconName: "font_aline_center",
  icon: [
    1024,
    1024,
    [],
    "",
    "M287.670857 0a43.885714 43.885714 0 1 0 0 87.771429h390.144a43.885714 43.885714 0 0 0 0-87.771429H287.670857zM43.885714 936.228571a43.885714 43.885714 0 1 0 0 87.771429h877.714286a43.885714 43.885714 0 0 0 0-87.771429H43.885714zM0 355.986286a43.885714 43.885714 0 0 1 43.885714-43.885715h877.714286a43.885714 43.885714 0 0 1 0 87.771429H43.885714a43.885714 43.885714 0 0 1-43.885714-43.885714zM287.670857 624.128a43.885714 43.885714 0 1 0 0 87.771429h390.144a43.885714 43.885714 0 0 0 0-87.771429H287.670857z",
  ],
};

const font_aline_right: IconDefinedType = {
  iconName: "font_aline_right",
  icon: [
    1024,
    1024,
    [],
    "",
    "M921.6 0a43.885714 43.885714 0 0 1 0 87.771429H531.529143a43.885714 43.885714 0 0 1 0-87.771429H921.6zM921.6 936.228571a43.885714 43.885714 0 0 1 0 87.771429H43.885714a43.885714 43.885714 0 1 1 0-87.771429h877.714286zM965.485714 355.986286a43.885714 43.885714 0 0 0-43.885714-43.885715H43.885714a43.885714 43.885714 0 0 0 0 87.771429h877.714286a43.885714 43.885714 0 0 0 43.885714-43.885714zM921.6 624.128a43.885714 43.885714 0 0 1 0 87.771429H531.529143a43.885714 43.885714 0 0 1 0-87.771429H921.6z",
  ],
};
const copy: IconDefinedType = {
  iconName: "copy",
  icon: [
    1024,
    1024,
    [],
    "",
    "M454.4 448h134.4v121.6c0 19.2 12.8 32 32 32s32-12.8 32-32V448h121.6c19.2 0 32-12.8 32-32s-12.8-32-32-32h-121.6V249.6c0-19.2-12.8-32-32-32s-32 12.8-32 32V384H454.4c-19.2 0-32 12.8-32 32s12.8 32 32 32z M960 0H268.8c-38.4 0-64 25.6-64 64v128H64c-38.4 0-64 25.6-64 64v704c0 38.4 25.6 64 64 64h704c38.4 0 64-25.6 64-64v-140.8h128c38.4 0 64-25.6 64-64V64c0-38.4-25.6-64-64-64z m-192 960H64V256h140.8v499.2c0 38.4 25.6 64 64 64H768V960z m192-204.8H268.8V64H960v691.2z",
  ],
};
const img: IconDefinedType = {
  iconName: "img",
  icon: [
    1225,
    1024,
    [],
    "",
    "M328.61800127 247.08126641a80.43538887 80.43538887 0 1 0 79.87290293 79.8729038 79.87290293 79.87290293 0 0 0-79.87290293-79.8729038z m30.37420283 112.49704687a42.18639258 42.18639258 0 0 1-60.74840566 0 43.31136269 43.31136269 0 1 1 60.74840566 0z M1077.28584893 62.02362412h-956.22489932A60.74840566 60.74840566 0 0 0 62 122.77202979v778.47956455A60.74840566 60.74840566 0 0 0 122.74840566 962h956.22489845a60.18591972 60.18591972 0 0 0 60.1859206-60.74840566V122.77202979A60.18591972 60.18591972 0 0 0 1077.28584893 62.02362412z m10.68721963 839.22797022a10.68721963 10.68721963 0 0 1-10.68721963 10.68721962h-956.22489932a10.12473457 10.12473457 0 0 1-10.68721963-10.68721962v-73.68556553l240.74368067-239.05622461a11.24970469 11.24970469 0 0 1 7.87479346-3.37491123 11.81218974 11.81218974 0 0 1 7.31230751 0l69.18568418 68.06071318 42.18639258 42.18639258a33.18662901 33.18662901 0 0 0 23.62438037 9.56224864 34.31159912 34.31159912 0 0 0 23.6243795-9.56224864l64.68580195-65.81077207 215.43184511-218.24427129a8.99976357 8.99976357 0 0 1 7.31230752 0 8.99976357 8.99976357 0 0 1 7.3123084 0L1087.97306856 680.75738281z m0-293.617292l-232.30640215-229.49397597a60.18591972 60.18591972 0 0 0-42.74887764-17.4370421 56.24852344 56.24852344 0 0 0-42.74887851 17.99952716L554.73706602 596.94708271l-56.24852344 56.24852344-53.43609727-52.8736122L399.49114062 552.51074903a59.62343467 59.62343467 0 0 0-42.18639257-17.4370421 60.18591972 60.18591972 0 0 0-42.74887764 17.99952715L112.06118604 759.50531563V122.77202979a10.12473457 10.12473457 0 0 1 10.68721963-10.68721963h956.22489844a10.68721963 10.68721963 0 0 1 10.68721962 10.68721963z",
  ],
};

export default {
  font_size,
  font_bold,
  font_incline,
  font_deleteLine,
  font_underline,
  font_color,
  font_background,
  font_aline_left,
  font_aline_center,
  font_aline_right,
  copy,
  img,
};
