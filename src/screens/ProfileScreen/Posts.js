import Images from "../../components/utils/Images";

export default Posts = [
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 2, // hrs
    //connection: '1st', // which connection it is - 1st, 2nd, 3rd & handle the follow button with this param only.
    content: 'In commodo eu nulla duis adipisicing proident Lorem qui incididunt est nulla magna officia. Minim voluptate adipisicing esse dolor proident cupidatat nostrud. Veniam consectetur adipisicing do reprehenderit esse elit commodo sit veniam. Cupidatat deserunt ipsum deserunt cupidatat sint occaecat irure minim. Veniam id reprehenderit quis anim Lorem ipsum. Proident pariatur laborum est proident ea culpa occaecat sunt ullamco. Nisi est sint laboris mollit nisi tempor.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST1,
    shares: 5, // share count
    comments: 10,
    likes: 156, // like count
    // isLiked: false, // is liked by current user or not
  },
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 4, // hrs
    //connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    content: 'Nostrud cupidatat veniam Lorem ipsum tempor. Cupidatat eiusmod voluptate veniam tempor consequat mollit.',
    hasImage: false, // hasImage or not
    shares: 2, // share count
    comments: 4,
    likes: 10, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 1, // hrs
    content: 'Enim et excepteur esse cupidatat nulla. Cillum eiusmod ipsum ipsum velit culpa nulla consequat veniam magna. Irure consectetur proident commodo ipsum dolore eiusmod sit consequat do proident. Ea Lorem et quis anim enim excepteur velit.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST2,
    shares: 185, // share count
    comments: 0,
    likes: 11556, // like count
  },
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 20, // hrs
   // connection: '3rd', // which connection it is - 1st, 2nd, 3rd
    content: 'Ex velit elit mollit magna sit ullamco consequat sint occaecat occaecat excepteur ex sunt. Consectetur irure duis magna Lorem sit. Non ad ipsum dolor irure sit officia elit aute sit nisi laborum id.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST3,
    shares: 0, // share count
    comments: 3,
    likes: 10, // like count
    isLiked: false, // is liked by current user or not
  },
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 16, // hrs
   // connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    content: '',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST4,
    shares: 187, // share count
    comments: 19,
    likes: 1500, // like count
    isLiked: false, // is liked by current user or not
  },
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 6, // hrs
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: 'Ut deserunt nulla tempor incididunt pariatur veniam id consectetur duis reprehenderit sit. Sit ad in laborum voluptate anim Lorem ullamco quis occaecat excepteur sunt do velit qui. Ea officia aliqua sit eu sit. Mollit ipsum sit proident reprehenderit dolor veniam nisi aliquip enim.',
    hasImage: false,
    shares: 37, // share count
    comments: 178,
    likes: 856, // like count
    isLiked: false, // is liked by current user or not
  },
  {
    profile_picture:Images.USERS.USER0,
    name: "Alvaro Herrera",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 10, // hrs
    content: 'Dolore elit sit excepteur pariatur do. Elit ipsum aute duis duis ut. Consectetur aliquip sunt ea aute aute cillum non. Ut adipisicing pariatur sit excepteur.',
    hasImage: false,
    shares: 7, // share count
    comments: 0,
    likes: 590, // like count
    isLiked: false, // is liked by current user or not
  },
]