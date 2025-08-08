export type CategoryFormHomeArtist = {
  id: string;
  name: string;
};

export type CategoryForHomeGenre = {
  label: string;
  artists: CategoryFormHomeArtist[];
};

type CategoriesForHome = {
  BR: {
    genres: {
      country: CategoryForHomeGenre;
      pop: CategoryForHomeGenre;
      funk: CategoryForHomeGenre;
      rock: CategoryForHomeGenre;
    };
  };
  KR: {
    genres: {
      pop: CategoryForHomeGenre;
      rock: CategoryForHomeGenre;
      hipHop: CategoryForHomeGenre;
    };
  };
  international: {
    genres: {
      pop: CategoryForHomeGenre;
      rock: CategoryForHomeGenre;
      hipHop: CategoryForHomeGenre;
      electronic: CategoryForHomeGenre;
    };
  };
};

export const categoriesForHome: CategoriesForHome = {
  BR: {
    genres: {
      country: {
        label: 'Sertanejo',
        artists: [
          { id: '7MiDcPa6UiV3In7lIM71IN', name: 'Gusttavo Lima' },
          { id: '1yR65psqiazQpeM79CcGh8', name: 'Marília Mendonça' },
          { id: '1elUiq4X7pxej6FRlrEzjM', name: 'Jorge & Mateus' },
          { id: '3p7PcrEHaaKLJnPUGOtRlT', name: 'Henrique & Juliano' },
          { id: '59jlthNnbmim5l9tmNA7se', name: 'Maiara & Maraisa' },
          { id: '487N2T9nIPEHrlTZLL3SQs', name: 'Zé Neto & Cristiano' },
          { id: '3qvcCP2J0fWi0m0uQDUf6r', name: 'Luan Santana' },
        ],
      },
      pop: {
        label: 'Pop Brasileiro',
        artists: [
          { id: '7FNnA9vBm6EKceENgCGRMb', name: 'Anitta' },
          { id: '4JNo6Q5KdcRf1vtSX9mB0S', name: 'João Gomes' },
          { id: '6xF3XdxG7VHRmQmTJxRqX8', name: 'Manu Gavassi' },
          { id: '4PzYKhC14sTJNEr0dzoo0d', name: 'Luísa Sonza' },
          { id: '4iWkwAVzssjb8XgxdoOL6M', name: 'Tiago Iorc' },
          { id: '1wFTlPjO7zRtvylmu5pm1d', name: 'Clarice Falcão' },
          { id: '6uYrXgVHctAJtIdSODcyLJ', name: 'Melim' },
        ],
      },
      funk: {
        label: 'Funk Brasileiro',
        artists: [
          { id: '1mXAhKnZEdF6rotyyd4GBi', name: 'MC Kevinho' },
          { id: '7Lmrb6KcIzfkmgbtokjsAL', name: 'MC Don Juan' },
          { id: '7me0S5Z40qVWj3gzyK8aC3', name: 'MC Livinho' },
          { id: '28ie4NNTa2VW2QV4Zray8M', name: 'MC Poze do Rodo' },
          { id: '6umAZ7rxjRBj2KXjLgDybW', name: 'DJ Rennan da Penha' },
          { id: '0IpLJsvZHA1op1pw8GAoPu', name: 'Valesca Popozuda' },
          { id: '78jcF59aMpz63E2TYmntws', name: 'MC Carol' },
        ],
      },
      rock: {
        label: 'Rock Brasileiro',
        artists: [
          { id: '2dmQ0vMD3THLMcz7DsvfaT', name: 'Pitty' },
          { id: '6tw6EpC9RgmSRZiZg0n22t', name: 'Legião Urbana' },
          { id: '4Z0yuwHVJBROVZqFpTIr0d', name: 'Capital Inicial' },
          { id: '2Jw4Lrfjnyv2QsDoBgnrAP', name: 'CPM 22' },
          { id: '4C4kpaAdp6aKSkguw40SsU', name: 'Skank' },
          { id: '1on7ZQ2pvgeQF4vmIA09x5', name: 'Charlie Brown Jr.' },
          { id: '3CfJckVRuukdJSvK3r89yJ', name: 'Raimundos' },
        ],
      },
    },
  },
  KR: {
    genres: {
      pop: {
        label: 'K-Pop',
        artists: [
          { id: '41MozSoPIsD1dJM0CLPjZF', name: 'BLACKPINK' },
          { id: '7n2Ycct7Beij7Dj7meI4X0', name: 'TWICE' },
          { id: '1z4g3DjTBBZKhvAroFlhOM', name: 'Red Velvet' },
          { id: '2KC9Qb60EaY0kW4eH68vr3', name: 'ITZY' },
          { id: '6HvZYsbFfjnjFrWF950C9d', name: 'NewJeans' },
          { id: '4SpbR6yFEvexJuaBpgAU5p', name: 'LE SSERAFIM' },
          { id: '2AfmfGFbe0A0WsTYm0SDTx', name: 'i-dle' },
          { id: '3HqSLMAZ3g3d5poNaI7GOU', name: 'IU' },
          { id: '3qNVuliS40BLgXGxhdBdqu', name: 'Taeyeon' },
          { id: '6MoXcK2GyGg7FIyxPU5yW6', name: 'Sunmi' },
          { id: '2PSJ6YriU7JsFucxACpU7Y', name: 'Chungha' },
          { id: '7bmYpVgQub656uNTu6qGNQ', name: 'Hwasa' },
          { id: '6UbmqUEgjLA6jAcXwbM1Z9', name: 'BIBI' },
          { id: '7cVZApDoQZpS447nHTsNqu', name: 'LeeHi' },
        ],
      },
      rock: {
        label: 'Rock Coreano',
        artists: [
          { id: '5TnQc2N1iKlFjYD7CPGvFc', name: 'DAY6' },
          { id: '5na1LmEmK2VzNLje9snJYW', name: 'The Rose' },
          { id: '57okaLdCtv3nVBSn5otJkp', name: 'Hyukoh' },
          { id: '2jw70GZXlAI8QzWeY2bgRc', name: 'NELL' },
          { id: '2SY6OktZyMLdOnscX3DCyS', name: 'Jannabi' },
          { id: '6dCz3spfpIvqqqsIoP6wXi', name: 'CNBLUE' },
          { id: '6KhH771vq2X2Aom91nNzpZ', name: 'FTISLAND' },
        ],
      },
      hipHop: {
        label: 'Hip-Hop Coreano',
        artists: [
          { id: '4XpUIb8uuNlIWVKmgKZXC0', name: 'Zico' },
          { id: '3eCd0TZrBPm2n9cDG6yWfF', name: 'DEAN' },
          { id: '4XDi67ZENZcbfKnvMnTYsI', name: 'Jay Park' },
          { id: '5snNHNlYT2UrtZo5HCJkiw', name: 'Epik High' },
          { id: '0siBQaURCli5wn2lqv8WZg', name: 'DPR LIVE' },
          { id: '2u7CP5T30c8ctenzXgEV1W', name: 'pH-1' },
          { id: '2gsggkzM5R49q6jpPvazou', name: 'Jessi' },
          { id: '57W9ikVc6O2wLDtmclSjvN', name: 'Simon Dominic' },
          { id: '7IrDIIq3j04exsiF3Z7CPg', name: 'Beenzino' },
          { id: '5dCvSnVduaFleCnyy98JMo', name: 'Heize' },
          { id: '2auC28zjQyVTsiZKNgPRGs', name: 'RM' },
          { id: '6HaGTQPmzraVmaVxvz6EUc', name: 'Jungkook' },
          { id: '4ufh0WuMZh6y4Dmdnklvdl', name: 'Baekhyun' },
          { id: '13rF01aOogvnkuQXOlgTW8', name: 'Taemin' },
        ],
      },
    },
  },
  international: {
    genres: {
      pop: {
        label: 'Pop Internacional',
        artists: [
          { id: '06HL4z0CvFAxyc27GXpf02', name: 'Taylor Swift' },
          { id: '6M2wZ9GZgrQXHCFfjv46we', name: 'Dua Lipa' },
          { id: '66CXWjxzNUsdJxJ2JdwvnR', name: 'Ariana Grande' },
          { id: '6qqNVTkY8uBg9cP3Jd7DAH', name: 'Billie Eilish' },
          { id: '1Xyo4u8uXC1ZmMpatF05PJ', name: 'The Weeknd' },
          { id: '1McMsnEElThX1knmY4oliG', name: 'Olivia Rodrigo' },
          { id: '1uNFoZAHBGtllmzznpCI3s', name: 'Justin Bieber' },
        ],
      },
      rock: {
        label: 'Rock Internacional',
        artists: [
          { id: '0L8ExT028jH3ddEcZwqJJ5', name: 'Red Hot Chili Peppers' },
          { id: '7jy3rLJdDQY21OgRLCZ9sD', name: 'Foo Fighters' },
          { id: '7Ln80lUS6He07XvHI8qqHH', name: 'Arctic Monkeys' },
          { id: '1dfeR4HaWDbWqFHLkxsg1d', name: 'Queen' },
          { id: '6olE6TJLqED3rqDCT0FyPh', name: 'Nirvana' },
          { id: '53XhwfbYqKCa1cC15pYq2q', name: 'Imagine Dragons' },
          { id: '12Chz98pHFMPJEknJQMWvI', name: 'Muse' },
        ],
      },
      hipHop: {
        label: 'Hip-Hop Internacional',
        artists: [
          { id: '3TVXtAsR1Inumwj472S9r4', name: 'Drake' },
          { id: '2YZyLoL8N0Wb9xBt1NhZWg', name: 'Kendrick Lamar' },
          { id: '0Y5tJX1MQlPlqiwlOH1tJY', name: 'Travis Scott' },
          { id: '5K4W6rqBFWDnAN6FQUkS6x', name: 'Kanye West' },
          { id: '246dkjvS1zLTtiykXe5h60', name: 'Post Malone' },
          { id: '7jVv8c5Fj3E9VhNjxT4snq', name: 'Lil Nas X' },
          { id: '0hCNtLu0JehylgoiP8L4Gh', name: 'Nicki Minaj' },
        ],
      },
      electronic: {
        label: 'Música Eletrônica',
        artists: [
          { id: '1Cs0zKBU1kc0i8ypK3B9ai', name: 'David Guetta' },
          { id: '7CajNmpbOovFoOoasH2HaY', name: 'Calvin Harris' },
          { id: '60d24wfXkVzDSfLS6hyCjZ', name: 'Martin Garrix' },
          { id: '0NGAZxHanS9e0iNHpR8f2W', name: 'Alok' },
          { id: '64KEffDW9EtZ1y2vBYgq8T', name: 'Marshmello' },
          { id: '1vCWHaC5f2uS3yhpwWbIA6', name: 'Avicii' },
          { id: '5he5w2lnU9x7JFhnwcekXX', name: 'Skrillex' },
        ],
      },
    },
  },
};
