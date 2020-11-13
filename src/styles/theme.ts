const defaultTheme = {
    color:{
        gray_100: '#000000',
        gray_200: '#161A20',
        gray_300: '#2D3540',
        gray_400: '#434F60',
        gray_500: '#5A697F',
        gray_600: '#7B8799',
        gray_700: '#9CA5B3',
        gray_800: '#BDC3CC',
        gray_900: '#DEE1E6',
        gray_1000: '#F7FAFF',
        orange_hover: '#8C5B13',
        alert_hover: '#8C2B1B',
        blue_primary: '#3965A9',
        blue_hover: '#3E5E8C',
        blue_secondary: '#294266',
        blue_darken: '#152133',
        default: '#6BA2F6',
        alert: '#C34124',
        yallow_primary: '#D5B826',
        orange_primary: '#E2981D',
    },
    texts:{
        main_title:'900 54px/59px Roboto , sans-serif' ,
        main_title_small:'900 36px/41px Roboto , sans-serif',
        main_subtitle:'700 24px/29px Roboto , sans-serif',
        main_text:'400 16px/21px Roboto, sans-serif',
        small_text:'400 14px/19px Roboto, sans-serif',
        small_notation:'300 14px/19px Roboto, sans-serif',
    }
}


export type ThemeType = typeof defaultTheme
export default defaultTheme