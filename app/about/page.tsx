import * as motion from "motion/react-client"
import BackLink from "../components/BackLink"

const story = [
    `Hey there 👋, So you came here to know what's my story is. Here you go then. It all started when I was in grade 8 when my parents brought a computer home for the first time in our entire family's generation.`,
    `It was a gift my folks got for my big bro, when he passed GCE O/L exam. The specs were not that flashy. A 18" LCD monitor, AMD Sempron 145 single core processor clocked @ 2.8GHz, 1GB DDR2 RAM (768 usable), very low end nVdia graphics chip baked into the motherboard that shares 256 MB from system RAM (16 CUDA cores, imagine that), a normal keyboard and an optical mouse. This was in 2012 and there were core i 2nd generation series were the general processors everyone buys. Our one was a potato compared to even an i3 1st gen. Eventhough, me and bro got obsessed with it.`,
    `We played almost all the games that computer was able to run. Later on the road we made few modifications to the computer, upgraded the specs to play as much games as possible. The games we played were not original copies. They were pirated copies sold by the internet cafes and CD shop back in the day. Most of these games were an installer and a crack file to copy and paste. But every now and then, there was one that became a pain in the ass to install. Mounting several virtual drives, copying crack files to several places, running .bat scripts changing configurations in the computer and etc. My brother was just a normal user. He didn't like to mess too much with the computer. If some game is out of the normal install procedure, he would avoid installing it. But I was always the one who don't like to give up. I wanted to play all of the games. And to know all of the ins and outs of the computer. I mean back in the day when we install those hard to install games, beat difficult games to the end, was a huge flex in the classroom. I liked being the guy who knows how to install every cracked game, software, and even being the one who has beaten the highest number of games. To tell you how far I went, in 2015, there wasn't a game in the shop for me to buy that was runnable in my computer. I have played all of the AAA titles and some unique hard to find indie titles as well.`,
    `During this time I also learned to traverse BIOS (now you guys call it UEFI) and learn every setting, that I can, reinstalled several versions of Windows (all the way from XP to 10), tried installing linux for the first time. This whole computer games and software tinkering, exercised my brain in a unique way that gave me skills to troubleshoot and repair computers. I became famous as the guy who fixes the computers among my friends.`,
    `My education was different story though. I wasn't the smart kid in the classroom when it comes to general subjects we learned. I mean I was, up until I became obsessed with computers. Then my grades began falling apart. I went from being the 4th place in the class to 16th place in exam scores. I didn't care because I was thinking about computers. Being better at computers. Nothing else mattered.`,
    `Somehow I was able to pass my GCE O/L exam just so I won't get beaten up by my parents. It wasn't that bad either. 5As, 3Bs and a C for commerce. Oh I forgot to mention. I was lucky enough to study from grade 6 - 11 in english medium. My class was the first english medium class of our school. I got a B for maths and A for science. Yeah I was still better than average even without studying much.`,
    `At this point, I made the biggest mistake in my life. I wanted to play safe with A/Ls and chose commerce stream. I could've easily gotten into english medium maths stream in Maliyadeva College (which is one of the best schools in our area) but I didn't. Just wanted to finish A/Ls and get a normal job so my parents will be happy. My parents are coming from poor families and passing A/Ls is the biggest education thing. They never knew much about degrees. So I didn't have a motivation to do any degrees. My brother did commerce A/Ls, and got a normal job. So I wanted to do the same and carry on my computer geek stuff as a part time. That was the plan.`,
    `After passing A/Ls I jumped into doing jobs. First one was in a LP Gas distribution office as an office admin. Mostly I was entering data to the ERP software they had. I didn't like that job. After an year they figured out I didn't like the job and fired me. Then I got a job at a local computer shop as I knew the owner being a regular customer since childhood.`,
    `The job at the computer shop was a big milestone. Up until that point, I only had access to the computer in the home and some computers my friends brought to me to fix. But in the computer shop, I got access to computers from 90's to all the way to 2020. First I worked as a sales person and after about six months, I was transferred to the repairing side. The owner told me to learn from the technician. After few months with the technician, I was then given my own computer shop to take care of by the owner. I had to sell, take computers for repair and maintain the shop. I was also given unlimited internet access. This is where I began learning as much as I can about computers. Everyday I received a new problem to solve by a customer. This activated my neurons in a brand new way. I really enjoyed my time there.`,
    `But it all had to come to an end. Due to me spending more than 10 hours a day at the computer shop for a 25,000 LKR salary (this is a very low end salary in Sri Lanka), my parents didn't like it. They tried to stop me several times but I didn't want to quit as I didn't care about the salary. I was enjoying the work there. Somehow they finally won. They forced me to stay home and told the owner to not to get me to work ever again.`,
    `I was depressed for few weeks and from nowhere, an urge to do a degree came into my mind. I had a land my parents have bought me to build a house someday. I told my parents that, "look mom, dad, with my education level, I will never be able to do a job to build a good house in the land you have secured for me. Sell the land and give me the money. I wanna do a degree in Computer Science.". Since they don't want me to go work in the computer shop again, they said yes to that. One of the other reasons I wanted to do a degree was to run away from home. I was actually fed up with my parents telling me what to do.`,
    `Now starts the university chapter. Again I was not the smart one. Didn't score good. This was a bit hard though since I went to a uni after not studying for like 3 years. Few things happened that made me actually put my effort to this. One, I got dumped by a girl I was chasing, then I failed several subjects and my dad got a cancer. This all happened during the second year of my university. I fell down to the rock bottom. I have never failed a subject in my life up until that point. I was able to score an average mark without studying up until that point. Then I wanted to quit the degree but some peeps didn't want me to.`,
    `I lived with 5 boys in a rented house during uni time. These 5 boys were not from my faculty. No one talked to me from my faculty during first semester days, so I made friends from a different faculty. My friends were from the business faculty. They didn't want me to quit the degree. They always told me that I am better than anyone in my batch of my faculty. Well I cannot blame them. To their non IT minds, they see me as a god who knows everything about computers. But in reality, I was just a ex-computer repair guy who can't even write a simple web app or solve a differentiation problem.`,
    `But they kept telling me I'm the smartest guy they ever met. That gave me some hope to keep trying. At one point, I found this free course called "CS50x: Introduction to Computer Science" by Harvard. I was like "wait? a free course from Harvard?". So I took an attempt at it. Within an hour of the first lecture by David J. Malan. I was hooked. For the first time, I understood computer programming. I was able to finish CS50. That was another huge milestone. I got some confidence. I finished a course from Harvard. If I was able to do that. I should be able to do those failed modules. That became echoing inside me. Then I retook all the failed modules, started studying more complex branches of computer science and even did my final year project around compilers. I also started contributing to open source software.`,
    `All these efforts led to one epic moment. My internship. During my peak time (3rd year and 4th year first sem) I was keeping and eye on the WSO2 (one of the biggest SL tech companies) internship requirements in their career page. I felt like I might be able to take a shot at it. WSO2 only hires from the best SL universities and even from them they hire the best of the best grads. My uni was not even in the list and my GPA was 2.76. Yeah I did not type it wrong. To anyone else, my spec feels like impossible for WSO2 internship. But I gave it a shot anyways. And I got in! I was the first person to get into WSO2 from my university and I think I was the first in a long time get into WSO2 with such a low GPA. No connections, no good GPA, no good uni, just a passion and a courage to never give up landed me at WSO2.`,
    `That's my story so far. I don't know what awaits. Maybe WSO2 luck? Will I be able to find a permanent job due to my low GPA? Maybe back to another computer shop? I really don't know. But one thing is sure. I will keep solving problems. I helped people by solving their computer problems before even starting a degree. So I can simply say, it's kind of in my DNA.`,
]

export default function AboutPage() {
    return (
        <div>
            <BackLink />
            <motion.h1
                className="mb-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
                }}
            >
                My story
            </motion.h1>
            <motion.div
                className="mt-8 space-y-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.1,
                        duration: 0.7,
                        ease: [0, 0.71, 0.2, 1.01],
                    },
                }}
            >
                {story.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed text-fg/80">
                        {paragraph}
                    </p>
                ))}
            </motion.div>
        </div>
    )
}
