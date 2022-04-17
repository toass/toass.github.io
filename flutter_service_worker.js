'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa6ed9e0f26a6eba784aae8267df1951",
".git/config": "4be6b6b2943148fad3492b7295dd35a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "49493905f97cb7fae8473fb8b67bba3a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c171d14bde75f8c5ee0286baf4ce08fa",
".git/logs/refs/heads/main": "ccdb267a3b9a546c156de3098c11e943",
".git/logs/refs/remotes/origin/main": "10302bff80941c6168889ce163bac7ef",
".git/objects/02/0647d91309f48934e4f3997bdcca09edbccac4": "804ab0f77ae3f8789fff55f519df36a9",
".git/objects/02/193d194651d1182309329114bcef8c7bb0f6a6": "83f0689e32ae6fe5896f74b7288de3d4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/76f353457298aca060204245a31708802aeebe": "8f6e77136be08655c1ebc9666c8cd9d3",
".git/objects/0c/457f0c56328b6987de8629573605eb44e9c717": "9cf745ef11460be54711f133758d4c5b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/10/5974c734f46961cdf3b8200d4163c32a27747b": "ff01f7f2857a7726affb955da1e5874c",
".git/objects/12/c03880671bd132c46861e59f5f529679d2bb7c": "c7640e51c175bd5f95977298f483f3f3",
".git/objects/14/577c44785a9da03b96940bb3bf46fd698a9816": "80663ac89956102ebefe35b63b927a80",
".git/objects/18/7727cdffa5defd18bdfa0129e6bcccce450519": "3012232dc3e5b996b87a9574f4fd2ba3",
".git/objects/1a/7837912ad9a905713235a0ecbeeacdf6e2dd0b": "b9851a7578b31d2ab2f5557e307590db",
".git/objects/1b/0b5871b91a11d72c703926ed80e01cae8560d6": "9f66a6cc3d022dbbef8cec6046c2b23b",
".git/objects/1c/59d74c49fa65f1c792dbe6c04c6bd6f060b270": "54bcd5a48a2c208edda110f7623317ab",
".git/objects/1c/f22810e262bb3f0ecba70276053fadb2802ef1": "babfbb1823efdabf9e4070e43fbc2d7f",
".git/objects/20/0a03e46dfd4c83b3a14e185b1052db3e3f1939": "3f19ca554353e17248d2e62a4d3efbf0",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/a33e9cd62e0264b8129756db8c5121d61a04c7": "18e33e114cc9a4a60a781a3b13a43df1",
".git/objects/28/bcc9e817ce63a11c49b12b2733c9622821ce57": "e58f63a4b003534221a170810da7f1df",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/e85ae4b4afbb8945b5d1554b12a197e988734a": "d279afb6a69007cfed51f8b708be3c4a",
".git/objects/36/7139fa0043ccfc549b8b3ffb29bcbf6377e4f8": "80a63b6bb3ece0a678c59c99c9e95aa3",
".git/objects/38/1eae39afaa45e7eb1d2aed75aa42348eb5f7c6": "0216334a6b64eeb2e1caae0e04b57c82",
".git/objects/3b/f75c504e38f8f0faf84b18c19b79bf50cef02b": "1064ab29d3c8183d25379b89ce395e52",
".git/objects/3c/245d5d1b91d8584b5030df82b82bb3eb394b33": "83ccf3e501281e16bc8b5bb91e6c1453",
".git/objects/3f/5a7907845be87bdb8fd07417d8afb7c384c099": "91324cbe9dd39bb241e78c6fe77ff89a",
".git/objects/3f/c165da46c3948bf404761770199a686e0fce88": "830ef3c600e10b5ec0f572e7da66dd18",
".git/objects/3f/c318dd5ca29d0a1aec28d46edef53238322e6f": "590f5165b5ec76871b9d90d193564a81",
".git/objects/45/57784fe6e45866ff723b3d46aa5e3940a56ce9": "85f4d75c8607ebf2f1fd99a2f271cf4b",
".git/objects/45/f1728c0ec7f0601563fcc75f16f50e9013eb60": "22380d7c499596295159f27bbeae53d4",
".git/objects/46/36b4a609cebfdcbf3e10cf300a60fec1674d66": "9c24e8e15a6d34c55d25c1312a356ab9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/dc7a425a178b2e4d6fc8e209f400118c967704": "96144f4cd4b347fc650e7ef232dc1847",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/711d04795f9254ef416439447eb82696bfe496": "387bb660a025dfa589c8c9e6419090d0",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/bdaab13147703c74a3f061080f319b894f4a0f": "5481e3e6f739c045cd21a3947a346ba1",
".git/objects/59/853629c1a9a2e2361fa5cc399d0df9ee92b2b2": "2bc87050980c262664189f7f03a1b224",
".git/objects/5a/92def45f0aaf9d2f855d1039a0c299403fc687": "92128585c6baa41bd5d78545932c651f",
".git/objects/5c/0dde7c8cdfa969058bd14a3cafd91c46515576": "ab4db1c33662d5c1fb4863dbcf5f76b3",
".git/objects/5e/5ca744084cc19920a958fdcbd4c1b2ff0036eb": "cda3de2ef3caaaf0049e8ff30b6c27ad",
".git/objects/60/ec90e7ca39b9d6dad446d15e2804b2a0204568": "808d7f1e06ee811c68ac6641f707151a",
".git/objects/61/0287a6be4f7469c794c68299cd75ed3cedd678": "7bc6cc368d3d69b5709e79bd4f8d54a7",
".git/objects/62/909e4485d01e6b43ec9ee49f9f71a00f92496d": "cc85d0af01882084fe8ea2c5efcd513d",
".git/objects/62/94341c89c19ea518aaf7b566eaa9efd38c6032": "dec1f800f1862d9c2826ae44a84598be",
".git/objects/65/98cc353a569ee26a7602ca64b7c0fed4158aeb": "e7570e39b560b7a6ef5cccc3d70b8789",
".git/objects/69/7bc9b26653c19a2a86d3837850f1adaf3a2422": "f1c831578d232fd12f5923879cf46012",
".git/objects/6a/11a3b78d60c098de72c0bd9236bbd8bec38748": "b17e57b5c81ae8c7850a8e9c8de9da85",
".git/objects/6f/0d6baa95759e7072798b2f674d5db751a5f958": "82fe5f557ecfb2c85be16c27f98bf494",
".git/objects/71/27a25f4fa6b33df541a3801c951fcbb661656f": "2512d983a6e6fd2f4f66101ee8f81a90",
".git/objects/74/16cdd2cc9251a6d6d4f3edfa452dbd3824bb58": "b8edc964162b275e7c6491a9fcd23f9f",
".git/objects/75/be7f1fb4b9b702738938f71723df6b6b43230c": "d795ec2dc71cbb244b24a9cb12f5e942",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/a939d630d92ac55bd1b12d185d8c2390bf12da": "3daa17d45fbbe08674666cb48ada7c96",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f4675e4171cd5dfe7d2fb328481686c2966d20": "217bd7d6d51d797eeea4a68af2202814",
".git/objects/7c/6a0ea7c0422aae0d6dc04e78b9e8181c0ce69c": "ef997bf93bc7614707e4d38ff6625814",
".git/objects/7d/fea5804251f0ad6753f38f734567e7acbb21cd": "594ee32687bb5493a0dae9d20be7dedd",
".git/objects/82/5b91267b379965d6099ff805754b0c4ea7bf1b": "8bee1be6516f43eba933458baa864138",
".git/objects/82/f425479e527135810016f2ab361fb7aaf88e4b": "12d358958bbdfdcb79cf8631720b4568",
".git/objects/85/f2cac7ccc5c256cc45b0c2465465f03a0d62fe": "5476f3d619712fa3d257156b404f8399",
".git/objects/88/85e4d735a4a6b2ac5f8adb56ae256be2611c99": "5c3cedcb799002003108d90f7c77a83c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/551953fca4ecf01d9c62197ca3fe16030584bb": "f4d2cf9de8ce408a8cc3a5882ebc3eff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ebb64efa190b633cb677a02f060b562c098bb6": "dbd24299185c7b638d195bb7f07ee9b0",
".git/objects/8c/173639e21695b440389b4679b695086ddc7e27": "e94efcec3c8d85a8139e4c2ae6ca2748",
".git/objects/97/0a31cb4e05101a6c78864fdb03a32560b6eb79": "aa5763362248c13d266e9e97df1ba322",
".git/objects/99/0ee8659aa138b5ed8cdd0b944f1531f0f1ae02": "fef869fe0be2cd877b48879fc605774f",
".git/objects/9b/5295a7c289da5fa56118d75b9b595a376bd7a8": "ce344b88ccb921903245854d08cfbd06",
".git/objects/9c/7db09ae59f5b48853151d5316ab976c9504350": "ad11a261c98088f73346bb41f0c61077",
".git/objects/9c/b166463cfe89c5e28081be32cbfd8052e486d1": "0333af96c920764781a568e9508ddd16",
".git/objects/9d/502fd25e0cb785f288b8aeb8db84e91e3a1bc6": "c27e6b24fa6b3a530ae134284de6cbc4",
".git/objects/a0/cec539eb1b70f6450809d42e40f328e9ce0455": "1f7a2e29636f6d1b5ed6fce7fe3e219a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/4c644a79e22080ca8a5e9d13193da17d35e0c1": "c0febfaaba6fe42f679f68a2791d6f30",
".git/objects/a6/8324e24bfbd8f8e5c95aabc362261075516d74": "68b6a063156c812e6d783bab46778504",
".git/objects/aa/0aeeac3b420793d1ab33b85b4c8129cacfe182": "6ef5843dad829b5d7b0db4545967d61c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/85da5db4e8d6d3fc1744c132529c398e563a2f": "ccd583464464270fb6548d35cb7efc73",
".git/objects/b0/d3f8fac18fdf40d553e0128cc9dd8d53913855": "f6f6cc7e6f6bb4609a9c777963d3cde7",
".git/objects/b1/e3c3f8650aa64bff0975bc8de9cc6ee6025068": "c22cc3e561d935a102edd211f2586798",
".git/objects/b6/4beacd61682cc0a821b1f404ba99a30259c7ca": "3f6ca0fea82589ab26e7006856465164",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/673a4ea46523b181df4cc4132a902d8a3b2546": "1762a04e6accd297c38461e1d8e7405a",
".git/objects/bb/5cb623c1988d3003615ac0d93237cdf5b56288": "aa64def60b5dd8ac27cac5e89c81e20b",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/485524915b8b9cffd94f712380c7190687aae6": "5a768962a6b1153f1409d43ee42c1c15",
".git/objects/c9/2dc06d662a1f734aa5f5f72659b56803492b79": "a909b800e7cf7a50320e25936cf4dac5",
".git/objects/c9/fd752a299e5a1547d954c5eafbeec1230afb0a": "134c8606a2ce4b1fa218b62c1f7eaf1e",
".git/objects/cb/093f5a4871f18c664bb8302f1bf1476ea4d4f2": "6058f0cda2f4b520ab021b03991846ea",
".git/objects/cb/d7624db1c5898d0cea637601c139350be6b428": "41ad8a6cd65aebe72c9004d501454b50",
".git/objects/cf/2304ff854cf2d630d0c8bf55e601d1975e490d": "c6541afeefa75c946acd0401e131cb9f",
".git/objects/cf/c8426bfe56789926c6ac776d7d2f678f143f53": "c026c896207f820e4085e2977c6fc237",
".git/objects/d1/12add6617ca38597d4c72cfaec0d46f73d7aab": "db337e2f8c180e708ce77ae9a18ea736",
".git/objects/d2/dc4487abc9a402a3ba651772b069d60f552bb0": "3f42c56795eab3481223b05df9b2f8df",
".git/objects/d3/1a283d117f0e47e2a4f5c8559acdcca20fb7f7": "c84b522d10402763ed98b688affdb581",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/9b2e289ceecbfd6eab4f2f7c441e0ebf4c214b": "77152fc56b7742bcd7c54b142d9d2424",
".git/objects/dd/199ed9f3ad08e663ad05f83017bfa87d969255": "505784024cab5ea7db6c90d1df997353",
".git/objects/e0/85ce85b93d804e36f72eaa0d3d92fd16edf73e": "388be408253eade6f59084e50c0d8e79",
".git/objects/e3/95a065bc46c0cc97414dd967df056d9b80f08d": "3ed3f6630893675c7ffafafcc239d4e4",
".git/objects/e3/b14841cf57abc701a44022bd822e07b52ade9c": "c325706e503f0d33252896c3b16561d0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/65e8e7ec35da26f365d1bbc8fd46527e11046d": "b307b041c0fd77e38ed43b4cd28a70cb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/67b3583c4a4439df26aa9055373aa8749eb6f7": "1b39f7bee7f128b627fb194bd424364d",
".git/objects/ed/15d2f2c67b2f96f0da970f922aff8588bbca4d": "083a38348e7d7a716da463567abb1297",
".git/objects/ed/35a05b7b3a9c05b35020c74c0e4abfe08dcfb7": "90634d1e16e3685b5fe4aae325b36263",
".git/objects/ed/f672b7df3c39c17c3667959be4b90c87b477d6": "ba11dcaa2903c2150246480dbc99352c",
".git/objects/f0/37cb282a8f7f5e4c172e63a54281cafa05627e": "10c1affd58265fd16620fff24ba187b5",
".git/objects/f1/5d1a26ed4ce5ec2cfe64a18cc6784174104c6e": "43976b8606e643b4a80a1e0ce1391179",
".git/objects/f3/14054380f7a12c9023d1e54c5bbc3c987ffa12": "79443d2fd1319a46ee692da8994a226d",
".git/objects/f4/e093f20281ca1371f9473c80bc0748f77fe258": "49114b6715c913268b2f720d630166e8",
".git/objects/f5/a658f08437d01a300b5bbafdc655528b19facd": "ae1fede27c84958f17652f4c0fa3f667",
".git/objects/f8/dde81c9e50131e6f609dbc69288491127cb51e": "a7ae989bb2fc59ce64785c4e73b819fa",
".git/objects/f9/493d5f9db32434525ebe083037c3c418082855": "4a8fcc3e6d650f128cd776b134783941",
".git/objects/fc/92a7e95c7d48f659c80a719fc9213514a7f118": "9b8df228918a21437df3a465ecb6eca1",
".git/refs/heads/main": "f405d0200863cf7f81cc1ba67736fb41",
".git/refs/remotes/origin/main": "f405d0200863cf7f81cc1ba67736fb41",
"assets/AssetManifest.json": "6aa6a4294b92c4f7eaa74a83a097504b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "3e1701b0dc955ed5ecc8691e1bfb8f57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/repo/admob.jpg": "b15bc9c455e0f2630f15742ba4348cf2",
"assets/repo/background.jpg": "4dbb35820b58fa5a2c62c01cdcdfc5fe",
"assets/repo/github_logo.png": "6e92cf894353a44612db2d50ab921cac",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "03f29ee59a3c492771e4178289933c0f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/icon-512.jpg": "b806cb2a19c1e73397f744d71e579e3d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c394ba7c1641a1cf70191f3c5ef13240",
"/": "c394ba7c1641a1cf70191f3c5ef13240",
"main.dart.js": "d014ec9ab565a9644274a60a1039f05f",
"manifest.json": "35b425349d089b7500fc9a3dad8932cf",
"version.json": "d8c141163d5fa62bec93980992b97d38"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
