import images from '../../assets'

export interface Movie {
    src: string;
    title: string;
    main: string;
    runtime: string;
}

export const moviesData: Movie[] = [
    {
        src: images.batman_begins,
        title: 'batman_begins',
        main: 'Christian Bale',
        runtime: '120p'
    },
    {
        src: images.dune,
        title: 'Dune',
        main: 'Timothée Chalamet',
        runtime: '120m'
    },
    {
        src: images.sing_2,
        title: 'Sing 2',
        main: 'Matthew McConaughey',
        runtime: '120m'
    },
    {
        src: images.spider_man,
        title: 'Spider-Man: No Way Home',
        main: 'Tom Holland',
        runtime: '120m'
    },
    {
        src: images.the_dark_knight_rises,
        title: 'The Dark Knight Rises',
        main: 'Christian Bale',
        runtime: '120m'
    },
    {
        src: images.the_dark_knight,
        title: 'The Dark Knight',
        main: 'Christian Bale',
        runtime: '120m'
    }
]