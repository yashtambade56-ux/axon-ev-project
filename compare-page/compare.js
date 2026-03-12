const evData = [
    // --- Axon EV Core Models ---
    { id: 'axon-lite', name: 'Axon EV Lite', price: '₹ 25,000', priceVal: 25000, range: '450 km', rangeVal: 450, charging: '30 min', chargingVal: 30, image: 'img/lite.png' },
    { id: 'axon-pro', name: 'Axon EV Pro', price: '₹ 45,000', priceVal: 45000, range: '600 km', rangeVal: 600, charging: '25 min', chargingVal: 25, image: 'img/pro.png' },
    { id: 'axon-max', name: 'Axon EV Max', price: '₹ 65,000', priceVal: 65000, range: '750 km', rangeVal: 750, charging: '20 min', chargingVal: 20, image: 'img/max.png' },
    { id: 'axon-sport', name: 'Axon EV Sport', price: '₹ 85,000', priceVal: 85000, range: '800 km', rangeVal: 800, charging: '15 min', chargingVal: 15, image: 'img/sport.png' },

    // --- SUVs (12) ---
    { id: 'suv1', name: 'Tata Nexon EV', price: '₹ 5,100', priceVal: 5100, range: '312 km', rangeVal: 312, charging: '60 min', chargingVal: 60, image: 'https://s7ap1.scene7.com/is/image/tatapassenger/City-13-4?$B-1228-696-S$&fit=crop&fmt=webp' },
    { id: 'suv2', name: 'Tesla Model X', price: '₹ 11,250', priceVal: 11250, range: '560 km', rangeVal: 560, charging: '40 min', chargingVal: 40, image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Hero-Desktop-US.png' },
    { id: 'suv3', name: 'Mahindra XUV EV', price: '₹ 5,600', priceVal: 5600, range: '340 km', rangeVal: 340, charging: '50 min', chargingVal: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAvwUzV5tMdpY3TIQvB4qSwd2bGLErlAZyVsT5gzIpY15Du3aweN-dID57vLk4wSPLff-imYYTaGWy1GhE2TimqYzFMJSloU65EFCUBBO9w&s=10' },
    { id: 'suv4', name: 'MG ZS EV', price: '₹ 6,600', priceVal: 6600, range: '419 km', rangeVal: 419, charging: '45 min', chargingVal: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UMXnhHRiQ_xHM4j6KOnhosKLRZSUWiYmO0aV5eC6eK51b7nTD45kiAAsaah0r-Ptq6Qiwz-P4NNq3Ym2hJ0lw-AASFNMN5j1D5H8Mf8H&s=10' },
    { id: 'suv5', name: 'Hyundai Kona EV', price: '₹ 6,560', priceVal: 6560, range: '452 km', rangeVal: 452, charging: '42 min', chargingVal: 42, image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Kona/6228/1658735368758/front-left-side-47.jpg?tr=w-664' },
    { id: 'suv6', name: 'Kia EV6', price: '₹ 7,650', priceVal: 7650, range: '528 km', rangeVal: 528, charging: '38 min', chargingVal: 38, image: 'https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/ev6/meet/sec3/Se3_1.jpg' },
    { id: 'suv7', name: 'BYD Tang EV', price: '₹ 9,900', priceVal: 9900, range: '505 km', rangeVal: 505, charging: '40 min', chargingVal: 40, image: 'https://www.byd.com/material/byd-site/eu/product/tang-2024/l/Tang2024-charging-01-l.jpg' },
    { id: 'suv8', name: 'Nissan Leaf EV', price: '₹ 6,160', priceVal: 6160, range: '364 km', rangeVal: 364, charging: '45 min', chargingVal: 45, image: 'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/leaf/2026/overview/tabs/2026-nissan-leaf-red-driving.jpg' },
    { id: 'suv9', name: 'Volkswagen ID.4', price: '₹ 6,970', priceVal: 6970, range: '520 km', rangeVal: 520, charging: '42 min', chargingVal: 42, image: 'https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Showroom_ID4_masthead_desktop?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==' },
    { id: 'suv10', name: 'Volvo XC40 Recharge', price: '₹ 8,500', priceVal: 8500, range: '418 km', rangeVal: 418, charging: '40 min', chargingVal: 40, image: 'https://hips.hearstapps.com/hmg-prod/images/2024-volvo-xc40-recharge-ultimate-single-417-659d904ee6a7b.jpg?crop=0.699xw:0.588xh;0.237xw,0.353xh&resize=1200:*' },
    { id: 'suv11', name: 'Renault Koleos EV', price: '₹ 6,750', priceVal: 6750, range: '400 km', rangeVal: 400, charging: '38 min', chargingVal: 38, image: 'https://renault-liban.com/en/CountriesData/Lebanon_EN/images/cars/HELIOS/2024/KoleosAuroraph1/ProductPlan/overview/renault-koleos-aurora-ph1-overview-002_ig_w600_h337.jpg' },
    { id: 'suv12', name: 'Mercedes EQA', price: '₹ 9,680', priceVal: 9680, range: '426 km', rangeVal: 426, charging: '42 min', chargingVal: 42, image: 'https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/eqa/eqa-saloon-h243-fl-pi/overview/spa/05-2025/images/mercedes-benz-eqa-h243-spa-eqa-2400x2400-05-2025.jpg?im=Resize,width=1184' },

    // --- SEDANS (12) ---
    { id: 'sed1', name: 'Tesla Model S', price: '₹ 27,000', priceVal: 27000, range: '650 km', rangeVal: 650, charging: '40 min', chargingVal: 40, image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg' },
    { id: 'sed2', name: 'BMW i4 M50', price: '₹ 24,640', priceVal: 24640, range: '590 km', rangeVal: 590, charging: '38 min', chargingVal: 38, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-bmw-i4-m50-xdrive-107-662805af190b3.jpg?crop=0.748xw:0.633xh;0.178xw,0.240xh&resize=1200:*' },
    { id: 'sed3', name: 'Mercedes EQE', price: '₹ 27,200', priceVal: 27200, range: '500 km', rangeVal: 500, charging: '42 min', chargingVal: 42, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbKfkqwE9_oklC3S75ssvK1DSPPBz_z_M-A&s' },
    { id: 'sed4', name: 'Audi e-tron GT', price: '₹ 26,100', priceVal: 26100, range: '488 km', rangeVal: 488, charging: '41 min', chargingVal: 41, image: 'https://media.audiusa.com/assets/images/thumbnail/14680-3q6a0321.jpg' },
    { id: 'sed5', name: 'Lexus Electric Sedan', price: '₹ 27,280', priceVal: 27280, range: '480 km', rangeVal: 480, charging: '39 min', chargingVal: 39, image: 'https://www.lexusindia.co.in/wp-content/uploads/2024/10/the-es-series.jpg' },
    { id: 'sed6', name: 'Jaguar I-Pace Sedan', price: '₹ 25,075', priceVal: 25075, range: '470 km', rangeVal: 470, charging: '41 min', chargingVal: 41, image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/I-Pace/8078/1701247629946/front-left-side-47.jpg?tr=w-664' },
    { id: 'sed7', name: 'Volkswagen ID.V', price: '₹ 25,650', priceVal: 25650, range: '450 km', rangeVal: 450, charging: '42 min', chargingVal: 42, image: 'https://uploads.vw-mms.de/system/production/images/vwn/080/252/images/8dda4f3fa233150ce5573ae1e48d8bcbf3dce534/DB2023AU00854_retina_2400.jpg?1696939062' },
    { id: 'sed8', name: 'Nissan N7', price: '₹ 21,120', priceVal: 21120, range: '364 km', rangeVal: 364, charging: '45 min', chargingVal: 45, image: 'https://wieck-nissanao-production.s3.amazonaws.com/photos/40b18ff5667a1676d2a6216742d6a065f1a2466b/preview-928x522.jpg' },
    { id: 'sed9', name: 'Hyundai Ioniq 6', price: '₹ 23,375', priceVal: 23375, range: '480 km', rangeVal: 480, charging: '40 min', chargingVal: 40, image: 'https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/pip/eco/ioniq6-26my/highlights/exterior/highlights-ext-03-side-pc.jpg' },
    { id: 'sed10', name: 'Renault ZE', price: '₹ 22,440', priceVal: 22440, range: '450 km', rangeVal: 450, charging: '42 min', chargingVal: 42, image: 'https://c8.alamy.com/comp/BPG32M/moscow-russia-august-26-moscow-international-automobile-salon-2010-BPG32M.jpg' },
    { id: 'sed11', name: 'Kia K4', price: '₹ 23,400', priceVal: 23400, range: '510 km', rangeVal: 510, charging: '40 min', chargingVal: 40, image: 'https://s7d2.scene7.com/is/image/kiamotors/kia-sedan-5050-my26-k4:XL?dpr=on%2C2' },
    { id: 'sed12', name: 'Volvo S60 Recharge', price: '₹ 23,800', priceVal: 23800, range: '470 km', rangeVal: 470, charging: '41 min', chargingVal: 41, image: 'https://cdn.prod.website-files.com/5ec85520c4dfff034b036be2/63ac7d004386a6e609fba794_WF54393_LITGRE_January2023Content_Road%20test%20volvo%20s60%20recharge_body4.webp' },

    // --- PICKUPS (12) ---
    { id: 'tru1', name: 'Tesla Cybertruck', price: '₹ 12,500', priceVal: 12500, range: '800 km', rangeVal: 800, charging: '45 min', chargingVal: 45, image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Hero-Desktop-NA-SA-APAC.png' },
    { id: 'tru2', name: 'Rivian R1T', price: '₹ 12,800', priceVal: 12800, range: '560 km', rangeVal: 560, charging: '40 min', chargingVal: 40, image: 'https://www.team-bhp.com/forum/attachments/electric-cars/2331632d1686940351t-rivian-r1t-review-worlds-fastest-pick-up-truck-electric-intro.jpeg' },
    { id: 'tru3', name: 'Ford F-150 Lightning', price: '₹ 11,200', priceVal: 11200, range: '480 km', rangeVal: 480, charging: '42 min', chargingVal: 42, image: 'https://www.assets.ford.com/adobe/assets/urn:aaid:aem:22986718-11ac-4e3b-ad52-be0251ab02b4/as/Lightning_Mosaic4.webp?max-quality=75&crop-names=1_1x1&width=1920' },
    { id: 'tru4', name: 'GMC Hummer EV', price: '₹ 12,750', priceVal: 12750, range: '530 km', rangeVal: 530, charging: '41 min', chargingVal: 41, image: 'https://hips.hearstapps.com/hmg-prod/images/2026-gmc-hummer-ev-pickup-exterior-pr-111-6830be067f42b.jpg?crop=0.817xw:0.691xh;0.122xw,0.211xh&resize=1200:*' },
    { id: 'tru5', name: 'BYD T9', price: '₹ 12,600', priceVal: 12600, range: '520 km', rangeVal: 520, charging: '43 min', chargingVal: 43, image: 'https://www.inchcape-plus.com.sg/media/wgtfharm/gallery-section_exterior-1_1555x669px.jpg?width=1600&height=600&v=1db2fc64f15f230' },
    { id: 'tru6', name: 'Nissan e-Frontier', price: '₹ 11,500', priceVal: 11500, range: '500 km', rangeVal: 500, charging: '44 min', chargingVal: 44, image: 'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/trucks/DarkArmor/frontier-dark-armor-d.jpg' },
    { id: 'tru7', name: 'Volvo XC Pickup', price: '₹ 11,900', priceVal: 11900, range: '470 km', rangeVal: 470, charging: '42 min', chargingVal: 42, image: 'https://automacha.com/wp-content/uploads/2020/04/Volvo-pickup-truck.jpg' },
    { id: 'tru8', name: 'Hyundai Santa Cruz', price: '₹ 12,240', priceVal: 12240, range: '430 km', rangeVal: 430, charging: '41 min', chargingVal: 41, image: 'https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20210417_120803/27035/hyundai0.jpg' },
    { id: 'tru9', name: 'Tata Sierra EV Pickup', price: '₹ 12,750', priceVal: 12750, range: '440 km', rangeVal: 440, charging: '43 min', chargingVal: 43, image: 'https://s7ap1.scene7.com/is/image/tatamotors/sierra-kv-614x400?$TT-614-420-S$&fit=fit&fmt=avif-alpha' },
    { id: 'tru10', name: 'Mahindra e-Pickup', price: '₹ 12,200', priceVal: 12200, range: '420 km', rangeVal: 420, charging: '44 min', chargingVal: 44, image: 'https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dw0f56d7c7/Pik-up/banner/Desktop-banner-1920X829-01-new-pik-up.jpg' },
    { id: 'tru11', name: 'Kia EV Pickup', price: '₹ 12,600', priceVal: 12600, range: '450 km', rangeVal: 450, charging: '42 min', chargingVal: 42, image: 'https://worldwide.kia.com/int/image/page/tasman/renew/lineup-area-single-cab-chassis-lg.jpg' },
    { id: 'tru12', name: 'MG e-Truck', price: '₹ 12,750', priceVal: 12750, range: '460 km', rangeVal: 460, charging: '43 min', chargingVal: 43, image: 'https://imgd.aeplcdn.com/642x361/n/cw/ec/210581/exterior-right-front-three-quarter-2.jpeg?isig=0&q=80' },

    // --- COUPES (12) ---
    { id: 'cou1', name: 'Tesla Roadster', price: '₹ 14,500', priceVal: 14500, range: '1000 km', rangeVal: 1000, charging: '30 min', chargingVal: 30, image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2878,c_fit,f_auto,q_auto:best/roadster-hero-desktop' },
    { id: 'cou2', name: 'Porsche Taycan', price: '₹ 14,000', priceVal: 14000, range: '480 km', rangeVal: 480, charging: '22 min', chargingVal: 22, image: 'https://media.gettyimages.com/id/1384668232/photo/porsche-taycan-on-a-public-parking.jpg?s=612x612&w=0&k=20&c=AI-vL724_FqRnXG7l85Hck5gL5msARmcoDytJPCXk2Y=' },
    { id: 'cou3', name: 'Audi e-tron GT', price: '₹ 13,800', priceVal: 13800, range: '488 km', rangeVal: 488, charging: '41 min', chargingVal: 41, image: 'https://media.gettyimages.com/id/2193857577/photo/brussels-belgium-audi-rs-e-tron-gt-performance-battery-electric-performance-car-on-display-at.jpg?s=612x612&w=0&k=20&c=_Fje156-w9O3YyrvJc4EQ4H7hL5DtFdkt0e4GC4p1kM=' },
    { id: 'cou4', name: 'Mercedes EQC Coupe', price: '₹ 14,200', priceVal: 14200, range: '450 km', rangeVal: 450, charging: '42 min', chargingVal: 42, image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/EQS/8423/1750080410879/exterior-image-164.jpg' },
    { id: 'cou5', name: 'Jaguar I-PACE Coupe', price: '₹ 13,500', priceVal: 13500, range: '470 km', rangeVal: 470, charging: '40 min', chargingVal: 40, image: 'https://media.gettyimages.com/id/1031557256/photo/london-united-kingdom-prince-charles-prince-of-waless-new-jaguar-i-pace-fully-electric-car.jpg?s=612x612&w=0&k=20&c=JT8lwr_u47587fLn-C0ObflJHfoORrLsi7mTfb43MGw=' },
    { id: 'cou6', name: 'BMW i4 Coupe', price: '₹ 14,000', priceVal: 14000, range: '490 km', rangeVal: 490, charging: '38 min', chargingVal: 38, image: 'https://media.gettyimages.com/id/2016313188/photo/toronto-canada-bmw-i4-m50-is-seen-on-display-during-2024-canadian-international-autoshow-at.jpg?s=612x612&w=0&k=20&c=IOUlZc3SOoGpS4R6tJANT2kFQXQzZe9BkkgI6uhq_vI=' },
    { id: 'cou7', name: 'Lexus LC 500', price: '₹ 14,800', priceVal: 14800, range: '460 km', rangeVal: 460, charging: '42 min', chargingVal: 42, image: 'https://media.gettyimages.com/id/642407262/photo/chicago-2018-lexus-lc-500h-is-on-display-at-the-109th-annual-chicago-auto-show-at-mccormick.jpg?s=612x612&w=0&k=20&c=mdIeuQWIw_BXgc4k1jcnUe-Sy7djEQlf83aZJlmeBjk=' },
    { id: 'cou8', name: 'Maserati Alfieri', price: '₹ 14,900', priceVal: 14900, range: '480 km', rangeVal: 480, charging: '35 min', chargingVal: 35, image: 'https://media.gettyimages.com/id/461492464/photo/detroit-mi-maserati-shows-off-their-alfieri-concept-car-during-the-media-preview-at-the-north.jpg?s=612x612&w=0&k=20&c=_t8XxDqP75THqG4cUC_xObuVjF3xxM4VTLkQesTlOCo=' },
    { id: 'cou9', name: 'BMW i7', price: '₹ 12,900', priceVal: 12900, range: '560 km', rangeVal: 560, charging: '34 min', chargingVal: 34, image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/i7/11281/1752478507696/front-view-118.jpg' },
    { id: 'cou10', name: 'BYD Seal', price: '₹ 14,500', priceVal: 14500, range: '510 km', rangeVal: 510, charging: '38 min', chargingVal: 38, image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BYD/Seal/9561/1734775694899/front-view-118.jpg' },
    { id: 'cou11', name: 'Bentley GT', price: '₹ 14,800', priceVal: 14800, range: '520 km', rangeVal: 520, charging: '35 min', chargingVal: 35, image: 'https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/27my/gt-s/week-4-crops/GT%20S%20Stage%20Main%20Updated.jpg/_jcr_content/renditions/original.image_file.1048.449.file/GT%20S%20Stage%20Main%20Updated.jpg' },
    { id: 'cou12', name: 'Huracan EV', price: '₹ 14,900', priceVal: 14900, range: '450 km', rangeVal: 450, charging: '40 min', chargingVal: 40, image: 'https://content.carlelo.com/media/models/457/interior/huracan-1.webp' },

    // --- CONVERTIBLES (12) ---
    { id: 'con1', name: 'MG Cyberster', price: '₹ 12,500', priceVal: 12500, range: '580 km', rangeVal: 580, charging: '35 min', chargingVal: 35, image: 'https://cdn.locator.digital/BPs/14285/Microsites/156/HubModelDiscoveryPage1/MG%20Cyberster/Cyberster%20Exterior_718x540px_5.webp' },
    { id: 'con2', name: 'Maserati Folgore', price: '₹ 18,200', priceVal: 18200, range: '450 km', rangeVal: 450, charging: '32 min', chargingVal: 32, image: 'https://maserati.scene7.com/is/image/maserati/maserati/worldwide/models/grancabrio/model-pages/gracabrio-trim-dark-green-front-left-view-desktop.jpg?$1800x2000$&fit=constrain' },
    { id: 'con3', name: 'Tesla Roadster Conv', price: '₹ 24,500', priceVal: 24500, range: '1000 km', rangeVal: 1000, charging: '30 min', chargingVal: 30, image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2878,c_fit,f_auto,q_auto:best/roadster-glass-desktop' },
    { id: 'con4', name: 'Mini SE Cabrio', price: '₹ 8,500', priceVal: 8500, range: '201 km', rangeVal: 201, charging: '28 min', chargingVal: 28, image: 'https://www.mini.in/content/dam/MINI/marketIN/mini_in/Home/main-final-banner.webp.asset.1769683664724.webp' },
    { id: 'con5', name: 'Polestar 6', price: '₹ 19,000', priceVal: 19000, range: '600 km', rangeVal: 600, charging: '25 min', chargingVal: 25, image: 'https://www.polestar.com/dato-assets/11286/1746779512-03-polestar-6-25-roadster-performance-d.png?q=35&dpr=2&w=910' },
    { id: 'con6', name: 'Fiat 500e Cabrio', price: '₹ 6,200', priceVal: 6200, range: '320 km', rangeVal: 320, charging: '35 min', chargingVal: 35, image: 'https://media.istockphoto.com/id/492426812/photo/fiat-500-2014.jpg?s=612x612&w=0&k=20&c=Rt5XIvj3aQwR7tRWp4b8e4CyoubUpxful2vAEXA3sfM=' },
    { id: 'con7', name: 'Abarth 500e', price: '₹ 9,400', priceVal: 9400, range: '250 km', rangeVal: 250, charging: '35 min', chargingVal: 35, image: 'https://www.abarth.com/content/dam/abarth/gamma/500e-range/gallery-1/1/New_Abarth_500e_Range-Gallery_1-card-01-Desktop-1534X774.jpg' },
    { id: 'con8', name: 'Porsche 718 EV', price: '₹ 21,000', priceVal: 21000, range: '450 km', rangeVal: 450, charging: '22 min', chargingVal: 22, image: 'https://hips.hearstapps.com/hmg-prod/images/porsche-e-boxster-6410b7f34f961.jpg?crop=0.805xw:0.787xh;0.152xw,0.213xh&resize=980:*' },
    { id: 'con9', name: 'Fisker Ronin', price: '₹ 26,900', priceVal: 26900, range: '960 km', rangeVal: 960, charging: '30 min', chargingVal: 30, image: 'https://autodesignmagazine.com/wp-content/uploads/2023/08/fisker-ronin.jpg' },
    { id: 'con10', name: 'Wuling Mini EV', price: '₹ 3,900', priceVal: 3900, range: '170 km', rangeVal: 170, charging: '40 min', chargingVal: 40, image: 'https://dolubatarya.com/uploads/2022/09/wuling-miniev-cabrio-range-cltc.jpg' },
    { id: 'con11', name: 'Bentley EV GT Conv', price: '₹ 32,500', priceVal: 32500, range: '500 km', rangeVal: 500, charging: '35 min', chargingVal: 35, image: 'https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/26my/26my-gtc-azure/Range%20Stage%20Main.jpg/_jcr_content/renditions/original.image_file.1920.823.file/Range%20Stage%20Main.jpg' },
    { id: 'con12', name: 'Pininfarina B95', price: '₹ 45,000', priceVal: 45000, range: '450 km', rangeVal: 450, charging: '25 min', chargingVal: 25, image: 'https://imgd.aeplcdn.com/642x361/n/cw/ec/155577/left-front-three-quarter0.jpeg?isig=0&q=80' },

    // --- HATCHBACKS (12) ---
    { id: 'hac1', name: 'Tata Nexon EV (H)', price: '₹ 10,800', priceVal: 10800, range: '312 km', rangeVal: 312, charging: '60 min', chargingVal: 60, image: 'https://s7ap1.scene7.com/is/image/tatapassenger/City-0-4?$B-1228-696-S$&fit=crop&fmt=webp' },
    { id: 'hac2', name: 'MG ZS EV (H)', price: '₹ 10,120', priceVal: 10120, range: '419 km', rangeVal: 419, charging: '45 min', chargingVal: 45, image: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_980,h_551,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/fd895677221765ffd78efcc4ed2281a3/61839e3f170dc421af2abccd_new_ev_zs_parked_at_home.jpg' },
    { id: 'hac3', name: 'Renault Kwid EV', price: '₹ 7,650', priceVal: 7650, range: '250 km', rangeVal: 250, charging: '35 min', chargingVal: 35, image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/173191/new-kwid-exterior-left-front-three-quarter-4.jpeg?isig=0&q=80' },
    { id: 'hac4', name: 'Hyundai Kona EV (H)', price: '₹ 9,450', priceVal: 9450, range: '452 km', rangeVal: 452, charging: '42 min', chargingVal: 42, image: 'https://hyundai.ke/wp-content/uploads/sites/26/2021/08/SEN2409_01-Banners-Site-Hyundai-SEN-Desktop-KonaEV.webp' },
    { id: 'hac5', name: 'Volkswagen ID.3', price: '₹ 9,680', priceVal: 9680, range: '420 km', rangeVal: 420, charging: '50 min', chargingVal: 50, image: 'https://assets.volkswagen.com/is/image/volkswagenag/id3-Expand_Collapse-Charge_Offers-16x9-2500x1406-Image-03?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmYWxpZ249LTAuODMsMC4wMCZiZmM9b2ZmJjVjOGQ=' },
    { id: 'hac6', name: 'Honda e', price: '₹ 8,500', priceVal: 8500, range: '220 km', rangeVal: 220, charging: '35 min', chargingVal: 35, image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Elevate/12099/1758790837363/exterior-image-164.jpg' },
    { id: 'hac7', name: 'Nissan Leaf (H)', price: '₹ 10,350', priceVal: 10350, range: '364 km', rangeVal: 364, charging: '45 min', chargingVal: 45, image: 'https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/6e4d129b0126356ffe178f5393c3bbd41264a2e7' },
    { id: 'hac8', name: 'Hyundai Ioniq 5', price: '₹ 10,560', priceVal: 10560, range: '480 km', rangeVal: 480, charging: '40 min', chargingVal: 40, image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/110289/ioniq-5-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80&q=80' },
    { id: 'hac9', name: 'BMW i3', price: '₹ 10,625', priceVal: 10625, range: '310 km', rangeVal: 310, charging: '35 min', chargingVal: 35, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2018_BMW_i3_facelift_%281%29.jpg/960px-2018_BMW_i3_facelift_%281%29.jpg' },
    { id: 'hac10', name: 'Volkswagen e-Up', price: '₹ 9,000', priceVal: 9000, range: '260 km', rangeVal: 260, charging: '40 min', chargingVal: 40, image: 'https://ev-database.org/img/auto/Volkswagen_e-Up-2019/Volkswagen_e-Up-2019-01@2x.jpg' },
    { id: 'hac11', name: 'Mini Cooper SE', price: '₹ 11,440', priceVal: 11440, range: '270 km', rangeVal: 270, charging: '32 min', chargingVal: 32, image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-664' },
    { id: 'hac12', name: 'Peugeot e-208', price: '₹ 9,775', priceVal: 9775, range: '340 km', rangeVal: 340, charging: '30 min', chargingVal: 30, image: 'https://media.autoexpress.co.uk/image/private/s--KxOXv_9_--/f_auto,t_content-image-full-desktop@1/v1727455213/autoexpress/2024/09/Peugeot%20E-208%20GT-2.jpg' },

    // --- WAGONS (12) ---
    { id: 'wag1', name: 'Volvo V60 Recharge', price: '₹ 25,200', priceVal: 25200, range: '520 km', rangeVal: 520, charging: '45 min', chargingVal: 45, image: 'https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/blta18998208773c201/6826dbcf77898d1f3b71b572/overview-exterior-gallery-04-16x9.jpg?branch=prod_alias&quality=85&format=auto&iar=0&w=3840' },
    { id: 'wag2', name: 'Audi e-tron Wagon', price: '₹ 26,400', priceVal: 26400, range: '490 km', rangeVal: 490, charging: '42 min', chargingVal: 42, image: 'https://emea-dam.audi.com/adobe/assets/urn:aaid:aem:cb769e3c-2f00-43e0-a92f-a8a243ab911c/as/Render-S6-Avant-e-tron.jpg?preferwebp=true&width=300' },
    { id: 'wag3', name: 'Mercedes G-Wagon', price: '₹ 27,200', priceVal: 27200, range: '470 km', rangeVal: 470, charging: '32 min', chargingVal: 32, image: 'https://www.mercedes-benz.co.in/content/dam/india/passengercars/models/suv/g-580-electric/Digital_241224_P73787_P.C.G-Class.G580-EDITION-ONE_OneWeb-%CE%93%C3%87%C3%B4-Media-Gallery_DI-and-Adapt_Slide-9_2174x1224_V1R0.jpg?im=Resize,width=1014' },
    { id: 'wag4', name: 'BMW m5 Touring', price: '₹ 27,900', priceVal: 27900, range: '566 km', rangeVal: 566, charging: '35 min', chargingVal: 35, image: 'https://bmw.scene7.com/is/image/BMW/BMW-MY25-M5-Touring-Interior-1-Retouched:3to2?fmt=webp&wid=1504&hei=1003' },
    { id: 'wag5', name: 'Volkswagen ID.V Wagon', price: '₹ 25,520', priceVal: 25520, range: '450 km', rangeVal: 450, charging: '42 min', chargingVal: 42, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-volkswagen-id-buzz-102-6711367f2ff72.jpg?crop=0.724xw:0.614xh;0.0353xw,0.302xh&resize=1200:*' },
    { id: 'wag6', name: 'Nissan Leaf Wagon', price: '₹ 23,375', priceVal: 23375, range: '364 km', rangeVal: 364, charging: '45 min', chargingVal: 45, image: 'https://hips.hearstapps.com/hmg-prod/images/251029-01-elgrand-02-6902a99bcc6b2.jpg?crop=1.00xw:0.849xh;0,0.125xh&resize=350:*' },
    { id: 'wag7', name: 'Lexus UX 300e Wagon', price: '₹ 25,650', priceVal: 25650, range: '420 km', rangeVal: 420, charging: '42 min', chargingVal: 42, image: 'https://www.lexusindia.co.in/wp-content/uploads/2024/10/lexus-lm-series.jpg' },
    { id: 'wag8', name: 'Tesla Model S Wagon', price: '₹ 26,840', priceVal: 26840, range: '650 km', rangeVal: 650, charging: '40 min', chargingVal: 40, image: 'https://cdn.thisiswhyimbroke.com/images/tesla-model-s-statoin-wagon-640x533.jpg' },
    { id: 'wag9', name: 'Hyundai Wagon', price: '₹ 25,075', priceVal: 25075, range: '480 km', rangeVal: 480, charging: '40 min', chargingVal: 40, image: 'https://dmassets.hyundai.com/is/image/hyundaiautoever/HYU_PD_WAGON_EViz_Env_PE2-EcotronicGrayPearl_52910G4720_C02:21x9?wid=3005&hei=1287&fit=wrap,1' },
    { id: 'wag10', name: 'Toyota Vellfire', price: '₹ 24,640', priceVal: 24640, range: '450 km', rangeVal: 450, charging: '38 min', chargingVal: 38, image: 'https://static.toyotabharat.com/images/showroom/vellfire/gallery/1.jpg' },
    { id: 'wag11', name: 'Porsche Taycan Wagon', price: '₹ 27,450', priceVal: 27450, range: '480 km', rangeVal: 480, charging: '22 min', chargingVal: 22, image: 'https://a.storyblok.com/f/322327/1700x1301/f4b331d0b1/ta24q3nix0003-taycan-turbo-cross-turismo-side.jpg/m/1700x1155/smart/filters:format(avif)' },
    { id: 'wag12', name: 'Jaguar I-Pace Wagon', price: '₹ 26,350', priceVal: 26350, range: '470 km', rangeVal: 470, charging: '41 min', chargingVal: 41, image: 'https://editorial.pxcrush.net/carsales/general/editorial/XFSportbrake_01-r4pc.jpg?width=480&height=320&pxc_method=crop' }
];

// State Management
let currentCompareCount = 0;
let selectedCars = [];
let activeCardIndex = -1;

// DOM Elements
const compareModeBtn = document.getElementById('compare-mode-btn');
const compareDropdown = document.getElementById('compare-dropdown');
const cardsContainer = document.getElementById('selection-cards-container');
const compareNowBtn = document.getElementById('compare-now-btn');
const modal = document.getElementById('ev-selection-modal');
const modalClose = document.getElementById('modal-close');
const evOptionsContainer = document.getElementById('ev-options-container');
const comparisonSection = document.getElementById('comparison-result-section');
const comparisonTable = document.getElementById('comparison-table-container');
const modalSearch = document.getElementById('modal-search');

// Dropdown Logic
compareModeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    compareDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!compareDropdown.contains(e.target) && e.target !== compareModeBtn) {
        compareDropdown.classList.remove('active');
    }
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const count = parseInt(item.getAttribute('data-count'));
        initCompareMode(count);
        compareDropdown.classList.remove('active');
        compareModeBtn.innerText = `Comparing ${count} Cars`;
    });
});

function initCompareMode(count) {
    currentCompareCount = count;
    selectedCars = new Array(count).fill(null);
    cardsContainer.style.gridTemplateColumns = `repeat(auto-fit, minmax(220px, 1fr))`;
    compareNowBtn.disabled = true;
    comparisonSection.style.display = 'none';
    renderSelectionCards();
}

function renderSelectionCards() {
    cardsContainer.innerHTML = '';
    selectedCars.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = `selection-card ${car ? 'filled' : ''}`;

        if (car) {
            card.innerHTML = `
                <div class="filled-card-content">
                    <img src="${car.image}" alt="${car.name}">
                    <div class="filled-card-details">
                        <h3>${car.name}</h3>
                        <p class="price-tag">${car.price}/day</p>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="card-placeholder">
                    <h3>Select EV</h3>
                    <p>Click to Choose</p>
                </div>
            `;
        }

        card.addEventListener('click', () => openEVModal(index));
        cardsContainer.appendChild(card);
    });
}

function openEVModal(index) {
    activeCardIndex = index;
    modalSearch.value = ''; // Reset search
    renderEVOptions('');
    modal.classList.add('active');
}

modalClose.addEventListener('click', () => modal.classList.remove('active'));

modalSearch.addEventListener('keyup', () => {
    renderEVOptions(modalSearch.value);
});

function renderEVOptions(query) {
    evOptionsContainer.innerHTML = '';
    const selectedIds = selectedCars.filter(c => c !== null).map(c => c.id);
    const lowercaseQuery = query.toLowerCase();

    const filteredData = evData.filter(ev =>
        ev.name.toLowerCase().includes(lowercaseQuery)
    );

    filteredData.forEach(ev => {
        const isSelected = selectedIds.includes(ev.id);
        const option = document.createElement('div');
        option.className = `ev-option ${isSelected ? 'selected' : ''}`;

        option.innerHTML = `
            <img src="${ev.image}" alt="${ev.name}">
            <div class="ev-option-info">
                <h4>${ev.name}</h4>
                <p>Range: ${ev.range} • ${ev.price}/day</p>
            </div>
        `;

        if (!isSelected) {
            option.addEventListener('click', () => {
                selectedCars[activeCardIndex] = ev;
                modal.classList.remove('active');
                renderSelectionCards();
                compareNowBtn.disabled = !selectedCars.every(c => c !== null);
            });
        }
        evOptionsContainer.appendChild(option);
    });

    if (filteredData.length === 0) {
        evOptionsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px; color: #64748b;">No matching cars found.</p>';
    }
}

compareNowBtn.addEventListener('click', () => {
    comparisonSection.style.display = 'block';
    generateComparisonTable();
    comparisonSection.scrollIntoView({ behavior: 'smooth' });
});

function generateComparisonTable() {
    const minPrice = Math.min(...selectedCars.map(c => c.priceVal));
    const maxRange = Math.max(...selectedCars.map(c => c.rangeVal));
    const minCharging = Math.min(...selectedCars.map(c => c.chargingVal));

    let html = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Features</th>
                    ${selectedCars.map(car => `
                        <th>
                            <div class="car-header">
                                <img src="${car.image}" alt="${car.name}">
                                <h4>${car.name}</h4>
                            </div>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Daily Rental Price</strong></td>
                    ${selectedCars.map(car => `
                        <td class="${car.priceVal === minPrice ? 'highlight-best' : ''}">
                            <span class="price-txt">${car.price}</span>
                            ${car.priceVal === minPrice ? '<div class="best-badge">BEST PRICE</div>' : ''}
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td><strong>Driving Range</strong></td>
                    ${selectedCars.map(car => `
                        <td class="${car.rangeVal === maxRange ? 'highlight-best' : ''}">
                            ${car.range}
                            ${car.rangeVal === maxRange ? '<div class="best-badge">BEST RANGE</div>' : ''}
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td><strong>Charging (10-80%)</strong></td>
                    ${selectedCars.map(car => `
                        <td class="${car.chargingVal === minCharging ? 'highlight-best' : ''}">
                            ~${car.charging}
                            ${car.chargingVal === minCharging ? '<div class="best-badge">FASTEST</div>' : ''}
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td>Booking Status</td>
                    ${selectedCars.map(() => `<td style="color:#10b981;">Available Now</td>`).join('')}
                </tr>
                <tr>
                    <td>Premium Perks</td>
                    ${selectedCars.map(() => `<td>Full Insurance Included</td>`).join('')}
                </tr>
            </tbody>
        </table>
    `;
    comparisonTable.innerHTML = html;
}

