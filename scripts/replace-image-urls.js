#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// URL replacements mapping
const replacements = {
    // Greening
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDD9h4lEiiwS-F_T7PanGaIHSpDB8hK3LK6iGOMiPtMZbTcyBW26K_5FcqwDTWUV793J8UBhPOJvdJeI-FJ8VBdB5YjYuK7iwL9xdP6WxXypF0MOzn2kg38lGXX8314SigLn7ZVZvM67iBxOv1hvGPd9NQaE_jsdE4bhLiGC8yx5wXheedyGDNI2BvoeJN-PGAN6jBwq5oBEF9ZZH677T26fYgjKmyLRsbGiMgrUxAMN_KRkMA_Ghv27I3ds_VwRWsIeB7K3MMbHhU': '/images/services/greening-hero.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAf6sUSZTDVM9pUqgtmoEHf6VuQE1QryX6kbP7mav_pGAAqj3zVrPltD_erUW5Yyapikw9ZyFjNFhnAq9H3WN5LesXQ11QJMRUnbTNpr6kesjiWljurX54Lx7oOtnfbib7BKY3hTVdsD4gJiHMMnFargwixYXQ7qZsXUKogwyLJU-59NL2n0WubuVMKj0xOEAfjGCTS1ffi-bWJDt9CMmwCxD4w-eb8B7FXSO4tAjC4dKr_M404Zgg3HH9mFFN646faZ4AKTG_8YU8': '/images/services/greening-1.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCCXzSFr9vmTFN08dxJeR6OG0dML0lcaeXTJXZJxqH7PDzAu6hdau3ZlwiyIGxCPyHpY6bRtH1wbioSA-WnDQLKVzmaWka2ItETKjUM1MJ089NoEjn-VqRPl_JZ7qADUm1_BKpphYpLaMnQ6C6lsEhZxcxrwKF9cDprAIqXbRlp1slTuuFtY8ghwqnFdCAZH0_l5wmhXSzZsAgKQ5yWpDgeJ0b4A8Z78-Tw4eYJHPTbewXrRSiYLfnejSGre2SpIeP-iX8AB5l8DQk': '/images/services/greening-2.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD22LhN6rZU7TAiUOJnwSUzDqePNpfHmaQobysZL0DrksqVbZ7mv0AJ5epN1Qk0mMBL_xYVAqvGnH1SD70UXIo0oTKtOYtmGh62YziDaSPg3_8lKOwf3BZi4LCNmNoEm8nTf8ZZsPbUN_LkCVuvmZPIyR20sj0KBjkjSQj_ljQIJfSpo2hCNfFb5-FuhTnNoF3YuS3XFir4XZxG3utNtG_IJ-51l5RtHgRcqswjtXv2kIomZcfK8RX3UeA2ta5aBKfy8T-qtpWPf7Y': '/images/services/greening-3.jpg',

    // Plants
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQQxKsO_vDNpEab_nNAduZL7Rbf4YThC7g8DW5rJyPcOyX9JGtXIYU4GyGuroxHeXuiCmwh_-_LWOOa8avxJ4wFQaCuEANs4eUfz_51Ot-FJgqHWBgHFpejS0p6L1xWTyuABCgVmKcVOlPMKfxyhYY7m7i_piUeLrKGjvgR4pSwg9rJEC2hBhV8fBcrr5debJHenUieoLEd1klnw1Oplq0baArVpiEccznm939sobIiJGgJTVfTru0MbiHMPEbW1lssTVDJXW70cI': '/images/services/plants/japanese-fern.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA43S5yMOr4BuKoNzZ_AVzvQdL2gL3sP5k37TXBi9PlRNiH53GxrhosnDHKWr96umi6Lg9EbvhqCnykbF7dzYZjjq6O6BOfBNcDPDUodohQnYatTbJi1XLky-GeUiK316QAGGCEBiETvR3ttY8P4bAAYLHaLsv2erwIvUuiH0IviPr7Mmm8xMDNij3LSJZaFg_Z2mgUFCAAOxX7fou6ngTlzByzUvSlAGTg5TLLibg7Vfmn1OSs0b7dQOXqpp5Z6XPBgYRYHwLVoo0': '/images/services/plants/olive-tree.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCT8U0_N5r2fwgP6JCZkYO9zuz4C4o_m7ODLKmsMI_1-okVVRHhP_LEiprQY2sX3HwfXRWs1aPekq3guxa6N26ER6zhLjR9pQVi-RmM-FRIbDMp3szJzf2YSAySUt9UZj1b6A9SA_19q5pOaQzkwRF5Gtud3EMjIRl9YvTrCXcvGAIMprxyCH72v2QT-H56F2F2oTySo3OtcBiH3M_rPD89h_YwcVfOnVNnAt8AUX4r8XBkQEh0V-wczgeH89BgHZbncLFGbvlKwbs': '/images/services/plants/fiddle-leaf-fig.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB68d0mMvceDMJK789F0x7HaNQQmewBA59v52KP_0w4kscuRxQ6ngH7q0vwBdG5CR8OLK7NzifTL6CQylEWq9qbVpwTWnBscByUUDzUybiLN_RDpmRi-ChDuKsxarMK2iTzBrkLfjMBZ7guralIKvqNdWPvWIULVhc3Wxk88oe7JJkO5JW8H8qnSXyW1513PrFpp49gI_OE2HtZo2WoVZ6QUO343eC48yc44rUatKq7cKGmlgA8MgayiDNEx45tVLlu2Q07ipMym54': '/images/services/plants/magnolia.jpg',

    // Hardscaping
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBuS4k8l1PZiv4cENWFrbU6dwNq7SimGtSsyK9wNRvUtenSyq01V5NTLUinUFq-1fcxUkS1asDwN-hLosb6CFad8II3rH4UiCQOEhV1MVP4uWlJzW9is_dA4Id5fTy1Job6PqjPiPmjq33h8HD12QOyauWo7_K9J_MehmrbwTaVwURcXnzEwzf_NDoEt7M7eAve5Dkb2fu-GXdJWGuQo_Ry4YJIxpEnD7AQxM9pdtMk6MVHsNrMDCpaOu-uyWGrFL9Ady7IkYqodIA': '/images/services/hardscaping-hero.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCbSA1PVc-T-wV6Jk0tKzf_W7hU5RFxh8RuYb7kubR1rhbAWJfg37y3ERLalfI_cyqj6GaLC3txa945IX4ffgHJChXMqsllOYaj1FT_1rHQGheRy-2axmH7iQIrxb1bQwooVl_sPsG-7-q4-fCDPAIx086mGk5vVpYO5KRA6xgLux8f2aFiWW6MnBclLej0ZSjQw8r7V-hEM1I-kt62nZumzc5Td75JDSsXqM_IBYjEaHEdGzrLPrukoecdLyzEVLJvMUTyoslmvzs': '/images/services/hardscaping-1.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDNym8CyeeKN9klKtLxARQdN6hRymOcHy54VvXEL0Da9Qk8Xd6K0V13m5y2yKfZ6XU8F7vFL7OEuYxwag5zkWYt6556rVWtWelPZX7GNR6kqcy7HNUFjjogydJwDE9JYm0Xw12WgFpGyrDTXy3zTwOZBzDR8gDv5Upzmv2KyE6A3KJJ5_Gw3ppUc8j3H3t4xqhFY_KszoxkIhTfqDjMn5wvXYNAyom33ZZXldemblpt0GW9qKhJ2or1PKApEgFtR0PLUrL8ms4UZzU': '/images/services/hardscaping-after.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyNmACYxlVMqfEjOcmdy0Ba-gTWrXRaFyoeBD_ItK1PBJ2aU9Qel-55LdkqUSXSZxkc_Oo_5S-9WmybWenW49rJKEa_5-W4WysNCDNQzMdUQ-YwwhqqiPeILkZVmWp3T3uQBwYrScb9-HuKF2epC8BAMTCrNZ1_OLcWPumNK8vi2iUPQ6iwYLxIr5AuoH0JUHxkT5Gmv9eliDRvzs-4xpZrHikxqEtksZ1vUFqHIDhVRwPJ6WP1Svq6FsRhHBemeI4l8-dkU3w4Pc': '/images/services/hardscaping-before.jpg',

    // Materials
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZgVt0cBJFm_UCwHBydosHMxNEv1Z_vnQSVsu6vhny2heUW6TSEOUVx6vfTUeRiQ4HqTsI4l942uDQ21obsZ3K290JL4riSUL_D_0EOMa-NCEHx3lD3xkikUNdzuas3_SNk0RsikutsW-aVCtR3H1PzjRYFTm542x0PPxUgUgLTBUqva3XO6ybSIsI-VcL3e1y5gy6s3FCx5iE5wL1xWTpj-Xw129iPmoSvdhmHLsSGDXdIiMJhLdWzx_QcUBTxbSe0egUevwI8U': '/images/services/materials/basalt-grey.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDsvVAHQRG03YBGUCFSo3mSK1Yfqzj0rKJrSrTAsAOVyeNWWTlKF877A5JitaQx6-EX7_B8kTtuqoqD6mgQso1uuae0LPtv1_f3k35m9ltIEbAB-pYkZCqGTPqb2VBXS_QxMVzCB4tRCF-aKniKgXXCmFnjmM5S3err6lY2dC0dYJAya3B-448psT8OpUToarBOON09Bw5hjcHvKda95yEi3emly5N2OVOxFzMoxbMuZHXJEyVUBfbpQO1AhhPzMmpKn4_Cu88jbSE': '/images/services/materials/brazilian-ipe.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCFKIIdcug0mXFa2OA5KU7SpZ-B89uies1pZb0YiZ6p3WfxucgXA4fu_fthjJ0yDLCJgMnuNcmorkkUuNuDRoVGQogFQNSMg86WAUy_BYVzfQ6zl2hZLc1RTTdbBeWMkbSaFbjbwWPE-beqvVAmHgMo4QLP5n8uQOSzh69lTYZWLlP1bmP1DOcju_ZWfDvCbNxkIjfpXNecDzJu63zZr1iVEzDRvAUDhrgo1j4kFRt59ZWa1TjuIj3mhCbCxYGdbR0mO1bmgxrM0Ow': '/images/services/materials/travertine-cream.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDQEu9HXCAqLhWam8EvCszDThPG2A8XXsY36Z605KPX2MEplfab2eiylXrjsr13vt0BB0qLeANB2DG-0AXZ_JZrICIdtsNDEI_G6LcR-iTmpaG4RNAQCmeNwGawHC4xDfjl4ZRNX2krVnpIRqfLRFYP4EAfSHW4MZkwE7cPGl1wSpdANSvVpU3bdqo56BkoyUKMzoNlTzDdQKH8HYVm_uZVPaSrzfS7MZw4htBuwE-CZoEcahcTEUkfDP5t-i69U8zbOttmg5CQ_cs': '/images/services/materials/midnight-slate.jpg',

    // Hydro Systems
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZf06hyb6Q9muJV7u_bCXpsFtj8JgcXwD2BzPWeRs0Z0VpFhOJ2BAlBCw_RCIpO0xBkCT5uxVi-wWhjUImR_WvNPZKr80yoMICfbw7k7utoRDfRYb7TUD8npsigYKsbDrWXHArUClRRs_zt0cUoGIMySmZXQJl1DMNbY-ZXVBFKpwH40fVQDu0ptSYNZIfJ6qQ4ILwktQjvMr-_jkm9um3SzbFJ5q2-AvyQXPwQlUzbb_LXsPA9yxh4GKdOdHtRAN0TvHh2TPjBFI': '/images/services/hydro-systems-hero.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAH7ET6YzBZHdER35ir277OA628zr05rxvnRP4FEe4jJqpf6tNZDeFywCIJSQhgat98v6fTMt0oOvw5D4s2k2yKJMn3u0BliEyzRBv6-CD6bWBdrQLFDTIeQaOzrxlcy_iMffVWuceO2hRGB2ZoGd3WoNVaBGPXp82QgQVmCEo5sUOM0SgvtsbTqyjMlV8geLlZlKjyb2LWNmhpWSvJJ--Mivfckl8_O2kmTRnXLqzpZJ7wGZ_7V2NSOgJfAwVtb835rnpjE89kbkM': '/images/services/hydro-systems-1.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuARjOUwY5Tz7WCYYJ7Tzd-D0NoCUIpd6NOGoZksyLtomS6CplDjZBYfSVndGCDJI0dBwPAcdJwwiNcvnLta0eLnq11V6vaNkTL_CjLJeWlZyYHDAhdLhQjIwVVEaSWqu_J8x_RDc8JjThoKoD2lUdmnEHg5fO8adi8LP0scMgyh2mkvNEABuNGnC0nJrQYD-NIIuc_XqsVL6Mk_2ySJ9RtlvURy9vdFySn1z5mpt6_vbrb_sJG2cNz8mtUVJS5TL4iry1mKLa-M8c4': '/images/services/hydro-systems-2.jpg',

    // Lumination
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3GhDGO_GRmICrS6X2yWmDCOTWWUHoS5U-pzJdmbuKGVxXSUDJg0DUgEg5m3hs6mBSsfc8MqljxHfmcNfGnZSPZCUyjxdbMXK7iZe0-jxGrl8vSTuHsyr2XPiom7jLDoUH2K_PHoJipck6XR7DsnlU-FAeSep6NCy5GwjLhjejVQAVq3YIj0hs1-zFBasV4PhAW_NzoEpTuT6GKH9CX2UdRPyHj0vXTTlKReTBwgJxQD--_wL_p7cxaKqEc6fKSsL82vRCE1-VgQs': '/images/services/lumination-hero.jpg',

    // Projects
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqoKA0zf30djiztBqyLOZDXbhNDWEgGq4GcI1kJAy5eFPyBvY5O-0pgRJNTZG4vRvV2L064stMUVL0pzeTgT1m64Jgz7tuj-u9ZAxwTMDZIqsM8VCugNIcIpYKt8jCYkD-1DyADCbAEXzPpPRfMNWAfam5T3_-I-aRTwE12Y0MBeA5dmdm6tivdotScFToCt1fGa_IvQ3uPEKGY0lD_xKKbNqOCKyrbVUdY77QDQBxTaAnK0M1lfynySGap4-uW7XrkjtFukGs1-U': '/images/projects/project-1.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDbAWxxQ_xyBBUIoHl7gOSQxyTQeO28L_yhLlPpsKYFqbjVCHOTwOincgHQ4VUQXSM443wOn0R20meXAkjEsc_iiTqE62hTXGQ0sedMCEjVRUUWtscgvACnKhPlcfiOHXh5h30A2yJ4iUF5vdNwGheFCUsz7BHylpE0Kyz8WCTWV0NFpdO51GlHMa2dtnOeHOHv4wOlF4GXrPyKub-mE4XxdgCEyAfvVqVB3KFXCSpqQFCadbraR22ziFJCzbl6Jr9Ewxxzge3mKNE': '/images/projects/project-2.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBgiQaNhbxAzTzC2aKl9C23NA15ATaRYn-rNHNdHIZX7rhIbf6gjcaeu-xIWn_PlsrMBagNBunYJGSLJBQyoQFKUW20jfpDWqYY2UXVN57dAgNlhbQ1UFd2VkcVgPG_K0W_BTB5D-Qh4tKLKWSaZl8Ugbhm82neiPryzu9N5P8HimUORQeudGA1hyXxfAxnU2bHFHgDsp27oci0SlDuooYsHCZrcj5gfSh8p1ZWRUogLHW8vDkvsQvkJ5RnhjGM09-0d8OnNW8Lu-8': '/images/projects/project-3.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAo7p6VWz2r1uqq1JtQFnG21fDXJjKIyd1XptF-MFWoHWnfuXdpzOjHlh1nOQ95xReAAMfyjUeTbJZPMvg1ip2P4UX9cJGCxYxeLKHnmNYn7yig3g42MwRoeO2s3mH16IV6VLhkv_RkUgWcvMBKxy0KlkLmuK3B6RJ-UPVQUCPl3XLsjDAdCIvRq0B8N5OvwhrQIAXxYY4_bjmlqPwPrExzUqwarN2FsPobxlIT_uU4o2t2ssUymuWaM5HWDE3AXi4EgSrdYpwZEJc': '/images/projects/project-4.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1n-TK3YNFDBQTbLUe4eUOzSgGu2wKko5aor-WloBqOIjIdgvFyY2cJd4uwuw8WPosUXl3IcsQFxuadOGpTv9f2e-AQcDlzC4sI1mHriprHwSnGDRDvmuPb2EKQ_0UJeDwiBUFiNdDpND9rXhCMSkTz18A5rFKRv78oDIEbxASQ3S5mjVOlcnYsav2jfvFsS9BldwGiR8Q0eXkzBIsWTFEcac1GAfwobU_z-nZXR4AeXSVyXz8ZIpTEG6WEICimda2whPEMva7GuM': '/images/projects/project-5.jpg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC5uGXZBuUZQejSvXGb3zZiADK5_w6yiLPdaU3dcRVUOZzUBIKGmRHstmtaioI8InNsFClbKN8MnkKjqrxhE_HoFUYP1TG6t4C-p6eJyu95Lr5G-qYHN3ECRRrGiDDPA_Nf9nQ3X6RaLNNCbxsQ39FJ_znziGE9EXirqMm0LSM68LXRJ_M1lYhCyc7V2flTJczMUzmcbZdLbFx0VMT0mdQypN_vYxhvcMuC5MGov70LcMoIuNvw71KhS8WceDM22EP-uKBuJv_1rJ8': '/images/projects/project-6.jpg',

    // 404
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCbGyYIGJhdje5qM6O_xB8_l4FhuH1MLYoXHEbNdNnSPm_Xp9x9q3RfHFSr8XvS9lQArd9wDYmxUnGrzDuFNI_P9tzDr5_VIKhomYuVw5XdVkPhYvGMb79dndELKW4VQqFY-ZL-geG9v19E9FYzGQnP4uhKT_J-XCMYlIf_stnwxHJp8IZUNLZjrci3juI-2bDWkzy-WuDmV4fMBhacAnv953qdFCqnfTmx3ym84bc3Bnq0robGddXkRQx7bqKnnYSTWTggPEv4O5A': '/images/404.jpg'
};

// Files to process
const files = [
    'app/[locale]/(marketing)/services/greening/page.tsx',
    'app/[locale]/(marketing)/services/hardscaping/page.tsx',
    'app/[locale]/(marketing)/services/hydro-systems/page.tsx',
    'app/[locale]/(marketing)/services/lumination/page.tsx',
    'app/[locale]/(marketing)/projects/page.tsx',
    'app/[locale]/not-found.tsx'
];

console.log('🔄 Starting batch image URL replacement...\n');

let totalReplacements = 0;

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Skipping ${file} (not found)`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fileReplacements = 0;

    Object.entries(replacements).forEach(([oldUrl, newPath]) => {
        const count = (content.match(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        if (count > 0) {
            content = content.replace(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
            fileReplacements += count;
        }
    });

    if (fileReplacements > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ ${file}: ${fileReplacements} replacements`);
        totalReplacements += fileReplacements;
    } else {
        console.log(`  ${file}: No changes needed`);
    }
});

console.log('\n' + '='.repeat(50));
console.log(`✅ Total replacements: ${totalReplacements}`);
console.log('='.repeat(50));
