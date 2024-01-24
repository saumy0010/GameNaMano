export type BackgroundCardProps = {
    heading: string;
    paragraph: string;
    isCover: boolean;
    date: string;
  };
type AllData = Record<string, BackgroundCardProps>;
export const allData:AllData = {
    1:{
        heading:"Days Gone",
        date:"30TH NOVEMBER",
        paragraph:"Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        isCover:true,
    },
    2:{
        heading:"Evolution",
        date:"30TH DECEMBER",
        paragraph:"Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        isCover:false,
    },
    3:{
        heading:"Valorant",
        date:"25TH DECEMBER",
        paragraph:"Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        isCover:false,
    },
    4:{
        heading:"Warlords",
        date:"15TH OCTOBER",
        paragraph:"Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        isCover:false,
    },
}

