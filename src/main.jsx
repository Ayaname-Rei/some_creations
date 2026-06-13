import React from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  Camera,
  ClipboardList,
  Home,
  MapPinned,
  Smile,
  Sparkles,
  Users,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { path: "/", label: "首页", icon: Home },
  { path: "/team", label: "队员", icon: Users },
  { path: "/work-log", label: "工作日志", icon: ClipboardList },
  { path: "/happy", label: "快乐瞬间", icon: Smile },
  { path: "/memorable", label: "难忘瞬间", icon: Camera },
  { path: "/reward", label: "Reward", icon: Award },
];

const routeStops = [
  ["07:30", "集合上车", "工具箱、相机、零食和队服确认完毕，第一张出发合照留给这里。"],
  ["09:10", "车上备赛", "有人补觉，有人复查代码和螺丝，也有人负责拍一路上的小片段。"],
  ["11:40", "抵达赛场", "签到、搬设备、找电源、观察场地，紧张感从这里开始升起来。"],
  ["15:20", "赛后复盘", "把失败、成功、遗憾和好笑的地方都写下来，留给下一次出发。"],
];

const members = [
  {
    id: "01",
    name: "队员 A",
    role: "机械 / 结构 / 现场协作",
    color: "girl",
    text: "占位：写她在搭车、搬运或调试中的一个小故事。",
  },
  {
    id: "02",
    name: "队员 B",
    role: "算法 / 调参 / 资料整理",
    color: "girl",
    text: "占位：记录她处理关键问题、熬夜调参或整理资料的片段。",
  },
  {
    id: "03",
    name: "队员 C",
    role: "视觉 / 宣传 / 摄影记录",
    color: "girl",
    text: "占位：适合放拍照、剪视频、记录大家表情的幕后故事。",
  },
  {
    id: "04",
    name: "队员 D",
    role: "电控 / 运输 / 赛场支持",
    color: "boy",
    text: "占位：写他负责搬运、接线、找场地资源的忙碌瞬间。",
  },
  {
    id: "05",
    name: "队员 E",
    role: "代码 / 复盘 / 应急处理",
    color: "boy",
    text: "占位：写他在比赛前后对程序和策略的总结。",
  },
];

const workLogs = [
  ["结构检查", "机器人底盘、机械臂、螺丝和备用件清点。", "照片位：工作台全景"],
  ["电控联调", "电源、通信、传感器和线束走线记录。", "照片位：接线细节"],
  ["赛前测试", "把每次成功与失败都写成可回看的测试日志。", "视频位：机器人运行"],
  ["赛后复盘", "问题、原因、解决方案和下一步计划。", "文档位：复盘截图"],
];

const happyMoments = [
  ["车上聊天", "占位文字：记录大家在路上开的玩笑、分享的歌和突然安静的补觉。"],
  ["一起吃饭", "占位文字：放餐桌照片、点菜故事和比赛日最治愈的一顿饭。"],
  ["等待上场", "占位文字：紧张之前的小动作、互相打气和拍到的表情包。"],
  ["回程碎片", "占位文字：累到说不出话，但手机里多了很多值得保存的照片。"],
];

const memorableMoments = [
  ["第一次进场", "占位：赛场灯光、规则牌、机器人摆上场地的那一刻。"],
  ["临场故障", "占位：某次突然坏掉、全队一起围上去排查的片段。"],
  ["最后一轮", "占位：不论成绩如何，记录所有人盯着场地的表情。"],
];

const rewards = [
  ["奖项占位", "之后放证书、奖杯、成绩截图和官方链接。"],
  ["感谢名单", "记录指导老师、学长学姐、司机、工作人员和互相支持的人。"],
  ["下一站", "把这次比赛变成下一次出发的起点。"],
];

function getHashPath() {
  const value = window.location.hash.replace("#", "");
  return value || "/";
}

function App() {
  const [path, setPath] = React.useState(getHashPath);

  React.useEffect(() => {
    const onHashChange = () => {
      setPath(getHashPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const page = {
    "/": <HomePage />,
    "/team": <TeamPage />,
    "/work-log": <WorkLogPage />,
    "/happy": <HappyPage />,
    "/memorable": <MemorablePage />,
    "/reward": <RewardPage />,
  }[path] || <HomePage />;

  return (
    <>
      <Header path={path} />
      <main>{page}</main>
      <Footer />
    </>
  );
}

function Header({ path }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="回到首页">
        <span className="brand-mark" aria-hidden="true">
          RG
        </span>
        <span>RoboGame 搭车日志</span>
      </a>
      <nav className="top-nav" aria-label="主要导航">
        {navItems.map(({ path: itemPath, label, icon: Icon }) => (
          <a
            key={itemPath}
            href={`#${itemPath}`}
            aria-current={path === itemPath ? "page" : undefined}
          >
            <Icon aria-hidden="true" size={17} strokeWidth={2.4} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <RouteDrawing />
        <div className="hero-copy">
          <p className="kicker">2026 RoboGame Team Journal</p>
          <h1 id="hero-title">把去比赛的路，也认真记录下来。</h1>
          <p>
            首页保留第一版的搭车路书气质，后续内容被拆成独立页面：队员、工作日志、
            快乐瞬间、难忘瞬间和 reward。每一页都先放好照片、视频和文字占位。
          </p>
          <div className="hero-actions" aria-label="页面快捷入口">
            <a className="button primary" href="#/happy">
              快乐瞬间
            </a>
            <a className="button secondary" href="#/work-log">
              工作日志
            </a>
          </div>
        </div>
        <Ticket />
      </section>
      <section className="section route-section" aria-labelledby="route-title">
        <SectionTitle
          id="route-title"
          title="搭车路线与页面地图"
          text="像 iGEM Wiki 一样，把项目过程拆成可归档、可追溯、可继续补充的页面结构。"
        />
        <div className="route-grid">
          {routeStops.map(([time, title, text]) => (
            <article className="route-stop" key={time}>
              <time>{time}</time>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section page-map" aria-labelledby="map-title">
        <SectionTitle
          id="map-title"
          title="六个入口"
          text="首页负责建立氛围，其他页面负责承接真实材料。现在先用统一占位框，之后逐步替换成照片、视频和文字。"
          compact
        />
        <div className="map-grid">
          {navItems.slice(1).map(({ path: itemPath, label, icon: Icon }) => (
            <a className="map-card" href={`#${itemPath}`} key={itemPath}>
              <Icon aria-hidden="true" size={28} strokeWidth={2.3} />
              <h3>{label}</h3>
              <p>进入页面，补充真实素材和故事。</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function TeamPage() {
  return (
    <PageFrame
      label="Team"
      title="5 人小队"
      text="3 位女生、2 位男生。这里以后放头像、分工、个人记录和每个人最想保存的一张照片。"
    >
      <div className="member-grid expanded">
        {members.map((member) => (
          <article className={`member-card ${member.color}`} key={member.id}>
            <div className="avatar-placeholder">{member.id}</div>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.text}</p>
            <div className="mini-photo">个人照片占位</div>
          </article>
        ))}
      </div>
      <SplitBoard
        title="团队合照位置"
        text="这里之后适合放一张横向大合影，旁边写队伍介绍、比赛目标和这次出行的共同记忆。"
      />
    </PageFrame>
  );
}

function WorkLogPage() {
  return (
    <PageFrame
      label="Work Log"
      title="工作日志"
      text="这一页记录技术侧的准备、调试、测试、复盘。它不只是照片墙，也会成为下一次比赛可以回看的材料。"
    >
      <div className="work-board">
        {workLogs.map(([title, text, media], index) => (
          <article className="work-card" key={title}>
            <div className={`media-slot tone-${index + 1}`}>{media}</div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <Timeline />
    </PageFrame>
  );
}

function HappyPage() {
  return (
    <PageFrame
      label="Happy Moments"
      title="快乐瞬间"
      text="生活记录放在这里：车上的笑声、一起吃饭、等待比赛时的碎片和回程路上的小确幸。"
    >
      <div className="photo-board page-gallery" aria-label="快乐瞬间照片占位">
        {happyMoments.map(([title, text], index) => (
          <figure className={`photo-slot ${index === 0 ? "large" : ""}`} key={title}>
            <div className={`placeholder tone-${index + 1}`}>
              <span>{title}</span>
            </div>
            <figcaption>{text}</figcaption>
          </figure>
        ))}
      </div>
    </PageFrame>
  );
}

function MemorablePage() {
  return (
    <PageFrame
      label="Memorable"
      title="难忘瞬间"
      text="这一页更安静一些，留给紧张、遗憾、突然爆发的团队协作和真正让大家记住比赛的时刻。"
    >
      <div className="memory-stack">
        {memorableMoments.map(([title, text], index) => (
          <article className="memory-card" key={title}>
            <div className={`memory-frame tone-${index + 2}`}>照片 / 视频占位</div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function RewardPage() {
  return (
    <PageFrame
      label="Reward"
      title="Reward"
      text="这里不只放奖项，也放感谢、成长和下一站。等真实成绩出来后，可以替换成证书、奖杯、赛果和官方链接。"
    >
      <section className="reward-hero" aria-label="奖项主视觉占位">
        <Sparkles aria-hidden="true" size={54} strokeWidth={2.2} />
        <h2>奖杯 / 证书 / 成绩截图</h2>
        <p>主图占位，之后替换为正式获奖照片或团队举牌合影。</p>
      </section>
      <div className="archive-list">
        {rewards.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function PageFrame({ label, title, text, children }) {
  return (
    <section className="page-frame">
      <div className="page-title">
        <p className="kicker">{label}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {children}
    </section>
  );
}

function SectionTitle({ id, title, text, compact = false }) {
  return (
    <div className={`section-title ${compact ? "compact" : ""}`}>
      <h2 id={id}>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function RouteDrawing() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="route-line"></div>
      <div className="route-dot dot-a"></div>
      <div className="route-dot dot-b"></div>
      <div className="route-dot dot-c"></div>
      <div className="bus-card">
        <div className="bus-window"></div>
        <div className="bus-window"></div>
        <div className="bus-window"></div>
        <div className="bus-body"></div>
      </div>
    </div>
  );
}

function Ticket() {
  return (
    <aside className="ticket" aria-label="比赛行程票">
      <div>
        <span>出发</span>
        <strong>校园 / 实验室</strong>
      </div>
      <div>
        <span>目的地</span>
        <strong>RoboGame 赛场</strong>
      </div>
      <div>
        <span>乘客</span>
        <strong>5 人小队</strong>
      </div>
      <div className="ticket-code">RG-2026-ROAD</div>
    </aside>
  );
}

function SplitBoard({ title, text }) {
  return (
    <section className="split-board">
      <div className="wide-media">横向合影 / 视频占位</div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <h2 id="timeline-title">日志时间线</h2>
      <div>
        {routeStops.map(([time, title, text]) => (
          <article key={time}>
            <time>{time}</time>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>RoboGame Team Journal · React edition</p>
      <a href="#/">返回首页</a>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
