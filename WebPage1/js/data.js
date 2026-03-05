// ======================== 1. 语言配置数据 ========================
window.langData = {
    // 英文
    en: {
        nav: {
            title: "CDFG Research Group",
            about: "About Us",
            members: "Team Members",
            research: "Research Directions",
            publications: "Research Achievements"
        },
        lang: {
            zh: "中文",
            en: "English"
        },
        banner: {
            title: "Computational Design & Fabrication Group",
            desc: "We are committed to advancing technological development in the fields of computational design, digital fabrication, and human-computer interaction, focusing on creating tools that empower designers, engineers, and manufacturers to build higher-quality, more sustainable products and environments.",
            btn: "Meet Our Team <i class='fas fa-arrow-right ml-2'></i>"
        },
        mission: {
            title: "Our Mission",
            desc1: "CDFG is an interdisciplinary research team at Northwestern Polytechnical University (NPU), dedicated to exploring the intersection of computer science, design, and manufacturing. Our work covers all levels from fundamental algorithms to practical applications, aiming to make digital design and fabrication more accessible, efficient, and innovative.",
            desc2: "We collaborate with industry partners, academic institutions, and community organizations to translate our research findings into practical solutions to address pressing societal challenges."
        },
        research: {
            focus: "Key Research Areas",
            area1: "Computational Design & Optimization",
            area2: "Digital Fabrication & Robotics",
            area3: "Sustainable Design & Manufacturing",
            area4: "Human-Computer Interaction",
            area5: "AI-Assisted Design Tools"
        },
        team: {
            title: "Our Team",
            desc: "Our diverse research team consists of researchers, engineers, designers, and students, bringing extensive professional knowledge and perspectives to our work.",
            leader: "Team Leader",
            faculty: "Faculty & Researchers",
            students: "Students & Researchers"
        },
        footer: {
            title: "CDFG @ NPU",
            address: "Computational Design & Fabrication Group<br>Northwestern Polytechnical University<br>Xi'an, Shaanxi 710072, P.R.China",
            contact: "Contact Us",
            connect: "Follow Us",
            copyright: "&copy; 2024 Institute of Industrial Artificial Intelligence, Chinese Academy of Sciences. All rights reserved."
        },
        card: {
            expand: "Expand Details",
            collapse: "Collapse Details"
        }
    },

    // 中文
    zh: {
        nav: {
            title: "计算设计与制造研究组",
            about: "关于我们",
            members: "团队成员",
            research: "研究方向",
            publications: "研究成果"
        },
        lang: {
            zh: "中文",
            en: "English"
        },
        banner: {
            title: "计算设计与制造研究组",
            desc: "我们致力于推动计算设计、数字制造和人机交互领域的技术发展，专注于打造赋能设计师、工程师和制造者的工具，以创造更优质、更可持续的产品和环境。",
            btn: "认识我们的团队 <i class='fas fa-arrow-right ml-2'></i>"
        },
        mission: {
            title: "我们的使命",
            desc1: "CDFG是西北工业大学的一个跨学科研究团队，致力于探索计算机科学、设计和制造的交叉领域。我们的工作涵盖从基础算法到实际应用的各个层面，旨在使数字设计和制造更加普及、高效和富有创意。",
            desc2: "我们与行业合作伙伴、学术机构和社区组织合作，将研究成果转化为切实可行的解决方案，以应对紧迫的社会挑战。"
        },
        research: {
            focus: "研究重点领域",
            area1: "计算设计与优化",
            area2: "数字制造与机器人技术",
            area3: "可持续设计与制造",
            area4: "人机交互",
            area5: "人工智能辅助设计工具"
        },
        team: {
            title: "我们的团队",
            desc: "我们多元化的研究团队由研究员、工程师、设计师和学生组成，为我们的工作带来了广泛的专业知识和视角。",
            leader: "团队领军人物",
            faculty: "教师与研究员",
            students: "学生与研究人员"
        },
        footer: {
            title: "CDFG @ 西北工业大学",
            address: "计算设计与制造研究组<br>西北工业大学<br>中国 陕西省 西安市 710072",
            contact: "联系方式",
            connect: "关注我们",
            copyright: "&copy; 2024 中国科学院工业人工智能研究所。保留所有权利。"
        },
        card: {
            expand: "展开详情",
            collapse: "收起详情"
        }
    }
};

// ======================== 2. 成员数据配置（重点：增删改都在这里操作） ========================
window.memberData = {
    leader: [
        {
            id: "leader1",
            name: { en: "Zhang Weiwei", zh: "张伟伟" },
            position: { en: "Professor & Group Lead", zh: "教授 & 研究组负责人" },
            department: { en: "Department of Aerodynamics, Northwestern Polytechnical University", zh: "西北工业大学流体力学" },
            avatar: "images/leaders/ZhangWeiwei.png",
            about: {
                en: "Ph.D., Professor, Member of the Party Committee of the School of Aeronautics, Northwestern Polytechnical University (NPU), Director of the International Joint Research Institute for Intelligent Aerodynamics, Vice Chairman of the Chinese Society of Aerodynamics, and National Level Leading Talent. <br><br> Mainly engaged in research on intelligent aerodynamics, aeroelasticity and unsteady aerodynamics, having published more than 200 papers with a Google Scholar H-index of 42, and authored 4 monographs including \"Transonic Aeroelasticity\". <br><br> Presided over more than 20 national-level projects such as the National Key R&D Program and the Integrated Project of the National Natural Science Foundation, including key projects such as \"Key Technologies for Megawatt-level New Energy Aircraft with Electric Power\". He has won honors such as the National Defense Science and Technology Progress Award, the Youth Science and Technology Award of the Chinese Society of Aeronautics, and the First Youth Science and Technology Award of the Chinese Society of Aerodynamics. <br><br> Serves as Associate Editor of \"Journal of Aircraft\", Associate Editor of \"Acta Aerodynamica Sinica\" and other academic positions.",
                zh: `西北工业大学博士，现任西北工业大学航空学院党委委员、教授，流体力学智能化国际联合研究所所长，中国空气动力学会副理事长，国家级领军人才。
                    <br><br>
                    主要从事智能空气动力学、气动弹性力学与非定常空气动力学研究，发表论文200余篇，Google学术H因子42，撰写《跨声速气动弹性力学》等专著4部。
                    <br><br>
                    主持国家重点研发计划、国家自然科学基金集成项目等国家级课题20余项，包括"电功率兆瓦级新能源航空器关键技术"等重点项目。获国防科技进步奖、航空学会青年科技奖、空气动力学会首届青年科技奖等荣誉。
                    <br><br>
                    担任《Journal of Aircraft》副主编、《空气动力学学报》副主编等学术职务。
                    `
            },
            interests: {
                en: ["Computational Design", "Artificial Intelligence + Manufacturing"],
                zh: ["计算设计", "人工智能 + 制造"]
            },
            contact: {
                email: "zhangweiwei@npu.edu.cn",
                website: "#",
                scholar: "#"
            }
        }
    ],

    // 教师成员
    faculty: [
        {
            id: "member1",
            name: { en: "Song Shufang", zh: "宋述芳" },
            position: { en: "Professor & Group Lead", zh: "教授 & 研究组负责人" },
            department: { en: "Computational Design | School of Aeronautics, NPU", zh: "计算设计 | 西北工业大学航空学院" },
            avatar: "images/faculties/SongShufang.png",
            about: {
                en: "Professor Song is a Professor at the School of Aeronautics, Northwestern Polytechnical University. Her research focuses on developing computational tools for design and fabrication, with applications in aerospace engineering, product design, and sustainable manufacturing. She received her PhD from Tsinghua University and has published over 100 peer-reviewed papers in top journals and conferences.",
                zh: "宋教授是西北工业大学航空学院教授。她的研究重点是开发用于设计和制造的计算工具，应用于航空航天工程、产品设计和可持续制造领域。她拥有清华大学博士学位，并在顶级期刊和会议上发表了100多篇同行评审论文。"
            },
            interests: {
                en: ["Computational design optimization", "Generative design algorithms", "Digital fabrication workflows", "Sustainable material systems"],
                zh: ["计算设计优化", "生成式设计算法", "数字制造工作流", "可持续材料系统"]
            },
            publications: [
                { title: { en: "Computational Design for Additive Manufacturing (2023)", zh: "增材制造的计算设计 (2023)" }, link: "#" },
                { title: { en: "Generative Algorithms for Sustainable Aerospace Design (2022)", zh: "可持续航空航天设计的生成算法 (2022)" }, link: "#" },
                { title: { en: "Human-in-the-Loop Design Systems (2021)", zh: "人在环中的设计系统 (2021)" }, link: "#" }
            ],
            contact: {
                email: "songshufang@npu.edu.cn",
                website: "#",
                scholar: "#"
            }
        },
        {
            id: "member2",
            name: { en: "Wu Xiaojing", zh: "邬晓敬" },
            position: { en: "Associate Researcher", zh: "副研究员" },
            department: { en: "Robotics & Fabrication | School of Mechanical Engineering, NPU", zh: "机器人与制造 | 西北工业大学机械工程学院" },
            avatar: "images/faculties/WuXiaojing.png",
            about: {
                en: "Dr. Wu is an Associate Researcher at the School of Mechanical Engineering, Northwestern Polytechnical University. His work focuses on the development of robotic fabrication systems and human-robot collaboration in design and manufacturing. He has extensive experience in developing custom hardware and software solutions for digital fabrication processes in aerospace manufacturing.",
                zh: "邬博士是西北工业大学机械工程学院的副研究员。他的工作重点是开发机器人制造系统以及设计和制造中的人机协作。他在为航空航天制造领域的数字制造流程开发定制硬件和软件解决方案方面拥有丰富经验。"
            },
            interests: {
                en: ["Robotic fabrication", "Human-robot interaction", "Adaptive manufacturing", "Sensor integration"],
                zh: ["机器人制造", "人机交互", "自适应制造", "传感器集成"]
            },
            publications: [
                { title: { en: "Collaborative Robotic Fabrication for Aerospace Components (2023)", zh: "航空航天构件的协作机器人制造 (2023)" }, link: "#" },
                { title: { en: "Adaptive Control for Additive Manufacturing of Titanium Alloys (2022)", zh: "钛合金增材制造的自适应控制 (2022)" }, link: "#" }
            ],
            contact: {
                email: "wuxiaojing@npu.edu.cn",
                website: "#",
                scholar: "#"
            }
        },
        {
            id: "member3",
            name: { en: "Lyu Zhen", zh: "吕振" },
            position: { en: "Associate Researcher", zh: "副研究员" },
            department: { en: "AI & Design | School of Computer Science, NPU", zh: "人工智能与设计 | 西北工业大学计算机学院" },
            avatar: "images/faculties/LvZhen.png",
            about: {
                en: "Dr. Lyu is an Associate Researcher at the School of Computer Science, Northwestern Polytechnical University, where he develops AI-powered design tools that augment human creativity. His research combines machine learning, human-computer interaction, and design theory to create more intuitive and inclusive design systems for aerospace engineering.",
                zh: "吕博士是西北工业大学计算机学院的副研究员，他开发增强人类创造力的人工智能设计工具。他的研究结合了机器学习、人机交互和设计理论，为航空航天工程创建更直观和包容的设计系统。"
            },
            interests: {
                en: ["AI-assisted design", "Creative machine learning", "Human-AI collaboration", "Inclusive design tools"],
                zh: ["人工智能辅助设计", "创意机器学习", "人机协作", "包容性设计工具"]
            },
            publications: [
                { title: { en: "AI for Creative Aerospace Design (2023)", zh: "创意航空航天设计的人工智能 (2023)" }, link: "#" },
                { title: { en: "Human-Centered AI in Aerospace Design (2022)", zh: "航空航天设计中以人为中心的人工智能 (2022)" }, link: "#" },
                { title: { en: "Explainable AI for Aerospace Designers (2021)", zh: "面向航空航天设计师的可解释人工智能 (2021)" }, link: "#" }
            ],
            contact: {
                email: "lvzhen@npu.edu.cn",
                website: "#",
                scholar: "#"
            }
        }
        // 新增教师：直接复制上面的对象，修改内容即可
    ],

    // 学生成员
    students: [
        {
            id: "student1",
            name: { en: "Ye Zhiqiu", zh: "叶知秋" },
            position: { en: "Postdoctoral Fellow", zh: "博士后" },
            department: { en: "Computational Design", zh: "计算设计" },
            avatar: "images/students/YeZhiqiu.jpg",
            about: {
                en: "Dr. Ye's postdoctoral research focuses on developing optimization algorithms for sustainable aerospace building design. He holds a Master's degree in Computational Design from Northwestern Polytechnical University and a Bachelor's degree in Aerospace Engineering from Harbin Institute of Technology.",
                zh: "叶博士的博士后研究重点是开发可持续航空航天建筑设计的优化算法。他拥有西北工业大学计算设计硕士学位和哈尔滨工业大学航空航天工程学士学位。"
            },
            publications: [
                { title: { en: "Sustainable Design Optimization for Aerospace Facilities (2023)", zh: "航空航天设施的可持续设计优化 (2023)" }, link: "#" }
            ],
            projects: [],
            contact: {
                github: "#",
                email: "yezhiqiu@npu.edu.cn"
            }
        },
        {
            id: "student2",
            name: { en: "Tan Shenglian", zh: "谭胜涟" },
            position: { en: "Postdoctoral Fellow", zh: "博士后" },
            department: { en: "Robotics", zh: "机器人技术" },
            avatar: "images/students/TanShenglian.jpg",
            about: {
                en: "Dr. Tan's research focuses on robotic assembly systems for modular aerospace construction. He has a background in mechanical engineering and has interned at China Aerospace Science and Technology Corporation (CASC) and Siemens Digital Industries Software.",
                zh: "谭博士的研究重点是模块化航空航天建筑的机器人装配系统。他拥有机械工程背景，并曾在中国航天科技集团和西门子数字工业软件实习。"
            },
            publications: [
                { title: { en: "Robotic Assembly for Modular Aerospace Structures (2023)", zh: "模块化航空航天结构的机器人装配 (2023)" }, link: "#" }
            ],
            projects: [],
            contact: {
                github: "#",
                email: "tanshenglian@npu.edu.cn"
            }
        },
        {
            id: "student3",
            name: { en: "Chen Xin", zh: "陈鑫" },
            position: { en: "Postdoctoral Fellow", zh: "博士后" },
            department: { en: "Computer Science", zh: "计算机科学" },
            avatar: "images/students/ChenXin.jpg",
            about: {
                en: "Dr. Chen is a postdoctoral researcher working on machine learning models for generative aerospace design. He holds a PhD in Computer Science from Northwestern Polytechnical University, with a minor in Aerospace Design.",
                zh: "陈博士是一名博士后研究员，从事航空航天生成式设计的机器学习模型研究。他拥有西北工业大学计算机科学博士学位，辅修航空航天设计。"
            },
            publications: [],
            projects: [
                { title: { en: "Generative Design Tool for Aerospace Components (2023)", zh: "航空航天构件生成式设计工具 (2023)" } }
            ],
            contact: {
                github: "#",
                email: "chenxin@npu.edu.cn"
            }
        },
        {
            id: "student4",
            name: { en: "Wu Xinyi", zh: "吴心怡" },
            position: { en: "Research Fellow", zh: "研究员" },
            department: { en: "Human-Computer Interaction", zh: "人机交互" },
            avatar: "images/students/WuXinyi.jpg",
            about: {
                en: "Dr. Wu's research explores cultural differences in design tool usage and develops inclusive design interfaces for global aerospace users. She received her PhD from Tsinghua University, specializing in human-computer interaction for aerospace engineering.",
                zh: "吴博士的研究探索设计工具使用的文化差异，并为全球航空航天用户开发包容性设计界面。她拥有清华大学博士学位，专业方向为航空航天工程人机交互。"
            },
            publications: [
                { title: { en: "Cross-Cultural Design Interfaces for Aerospace Tools (2023)", zh: "航空航天工具的跨文化设计界面 (2023)" }, link: "#" },
                { title: { en: "Inclusive Design Tools for Aerospace Engineers (2022)", zh: "面向航空航天工程师的包容性设计工具 (2022)" }, link: "#" }
            ],
            projects: [],
            contact: {
                github: "#",
                email: "wuxinyi@npu.edu.cn"
            }
        },
        {
            id: "student5",
            name: { en: "Yu Luoning", zh: "於罗宁" },
            position: { en: "Research Fellow", zh: "研究员" },
            department: { en: "Human-Computer Interaction", zh: "人机交互" },
            avatar: "images/students/YuLuoning.jpg",
            about: {
                en: "Dr. Yu's research focuses on human-AI collaboration in aerospace design tool development, with an emphasis on user experience optimization for complex engineering systems. He received his PhD from the University of Science and Technology of China, with a focus on human-computer interaction in aerospace engineering.",
                zh: "於博士的研究重点是航空航天设计工具开发中的人机协作，侧重于复杂工程系统的用户体验优化。他拥有中国科学技术大学博士学位，专业方向为航空航天工程人机交互。"
            },
            publications: [
                { title: { en: "Cross-Cultural Design Interfaces for Aerospace Systems (2023)", zh: "航空航天系统的跨文化设计界面 (2023)" }, link: "#" },
                { title: { en: "Inclusive Design Tools for Aerospace Engineering Teams (2022)", zh: "面向航空航天工程团队的包容性设计工具 (2022)" }, link: "#" }
            ],
            projects: [],
            contact: {
                github: "#",
                email: "yuluoning@npu.edu.cn"
            }
        },
        {
            id: "student6",
            name: { en: "Wang Yizhuang", zh: "王亦庄" },
            position: { en: "Research Fellow", zh: "研究员" },
            department: { en: "Human-Computer Interaction", zh: "人机交互" },
            avatar: "images/students/WangYizhuang.jpg",
            about: {
                en: "Dr. Wang's research explores the application of natural user interfaces in aerospace design tools, aiming to improve the efficiency and intuitiveness of complex engineering design processes. He received his PhD from Beihang University, specializing in human-computer interaction for aerospace systems.",
                zh: "王博士的研究探索自然用户界面在航空航天设计工具中的应用，旨在提高复杂工程设计流程的效率和直观性。他拥有北京航空航天大学博士学位，专业方向为航空航天系统人机交互。"
            },
            publications: [
                { title: { en: "Natural User Interfaces for Aerospace Design Tools (2023)", zh: "航空航天设计工具的自然用户界面 (2023)" }, link: "#" },
                { title: { en: "Inclusive Design for Aerospace HMI Systems (2022)", zh: "航空航天人机界面系统的包容性设计 (2022)" }, link: "#" }
            ],
            projects: [],
            contact: {
                github: "#",
                email: "wangyizhuang@npu.edu.cn"
            }
        },
        {
            id: "student7",
            name: { en: "Zuo Zijun", zh: "左子俊" },
            position: { en: "Postdoctoral Fellow", zh: "博士后" },
            department: { en: "Human-Computer Interaction", zh: "人机交互" },
            avatar: "images/students/ZuoZijun.jpg",
            about: {
                en: "Dr. Zuo's postdoctoral research focuses on explainable AI for aerospace design tools, helping engineers understand and trust AI-generated design recommendations. He received his PhD from Shanghai Jiao Tong University, specializing in machine learning and human-computer interaction for aerospace engineering.",
                zh: "左博士的博士后研究重点是航空航天设计工具的可解释人工智能，帮助工程师理解并信任人工智能生成的设计建议。他拥有上海交通大学博士学位，专业方向为航空航天工程机器学习与人机交互。"
            },
            publications: [
                { title: { en: "Explainable AI for Aerospace Design Decision-Making (2023)", zh: "面向航空航天设计决策的可解释人工智能 (2023)" }, link: "#" },
                { title: { en: "Inclusive Design Tools for AI-Assisted Aerospace Engineering (2022)", zh: "面向人工智能辅助航空航天工程的包容性设计工具 (2022)" }, link: "#" }
            ],
            projects: [],
            contact: {
                github: "#",
                email: "zuozijun@npu.edu.cn"
            }
        }
    ]
};