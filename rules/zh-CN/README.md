# Classic Fantasy Imperative 系统参考文档

版本 1.0，2023 年 9 月

《Classic Fantasy Imperative》是《Mythras》规则集的开放 ORC 授权版本，专注于地下城探索、高难度冒险以及涉及宝藏、魔法和致命敌人的紧张遭遇战。《Classic Fantasy Imperative》通过《Mythras》游戏系统的视角，重现了该爱好中最早的角色扮演游戏的原始快感。该系统基于 1d100（百分比）而非 d20。

本文档提供了一套全面但并非详尽的规则，包括角色创建、角色种族与职业、技能、特定典型情况的规则、战斗以及魔法——这些内容足以让玩家和游戏主持人（Games Master）入门，并为进一步发展打下坚实的基础。《Classic Fantasy》与《Classic Fantasy Imperative》、《Mythras》核心规则以及《Mythras Imperative》完全兼容。此外，它还与其他 ORC 授权的百分比制游戏系统兼容。

---
## ORC 许可

《Classic Fantasy Imperative》使用 ORC 许可发布。ORC 许可为游戏创作者提供了一种公开分享其游戏机制的方式，并允许下游用户自由使用、修改和重新分享这些游戏机制的改编版。

在 ORC 下公开分享的内容被称为**授权材料**（Licensed Material），包括游戏的广泛功能要素，例如数据块（statblocks）、游戏规则、角色属性、玩游戏固有的方法和系统，以及许可方明确希望分享的任何其他内容。该许可范围广泛，允许您在印刷书籍、视频游戏、播客、人工智能或未来可能存在或创建的任何其他技术中，在全球范围内使用这些授权材料。《Classic Fantasy Imperative》中发现的绝大部分内容构成了授权材料。

不在 ORC 下分享的内容被称为**保留材料**（Reserved Material），包括商标、世界观设定、故事弧、独特角色和视觉艺术。我们在下方的 ORC 通知中列出了保留材料。

根据 ORC 许可，只要您在出版作品中以声明的形式给予适当的归属，您就可以根据需要使用、分享、改编和构建授权材料。此声明既是对上游许可方及其对作品贡献的认可，也为下游用户提供了一种简单的方式来注明出现该声明的作品的作者。通过使用受 ORC 许可的材料，您即自动同意根据相同的条款在您的出版作品中许可您的游戏机制。如果您开发了自己的保留材料，那是您的专属财产。

#### ORC 通知

《Classic Fantasy Imperative》依据位于国会图书馆的 ORC 许可授权，并可在包括 [Paizo.com](https://paizo.com/community/blog/v5748dyo6sico?ORC-License-The-Final-Version-is-Here) 在内的多个地点在线获取。

所有担保均按其中规定予以免责。

#### 归属

本产品基于以下保留材料：

- 《Mythras》，The Design Mechanism 版权所有 2016，由 Pete Nash 和 Lawrence Whitaker 撰写
- 《Classic Fantasy Imperative》，The Design Mechanism 版权所有 2016，由 Rodney Leary, Pete Nash 和 Lawrence Whitaker 撰写

如果您在自己的出版作品中使用我们的授权材料，请按如下方式注明我们：

_**基于《Classic Fantasy Imperative》，由 Rodney Leary, Pete Nash 和 Lawrence Whitaker 撰写，并由 The Design Mechanism 出版，版权所有 2023**_

#### 保留材料

请注意，《Classic Fantasy Imperative》的母版游戏，《Classic Fantasy》和《Mythras》（由 The Design Mechanism 出版），根据 ORC 许可被指定为保留材料。

如果您希望利用《Classic Fantasy Imperative》或《Mythras》中的内容，请联系 The Design Mechanism 获取单独的 Mythras Gateway 许可，该许可允许访问保留材料，免除版税，但对批准和归属有一定条件。

以下内容也被视为保留材料：

- 《Classic Fantasy》和《Classic Fantasy Imperative》——作为名称，用于归属时除外，包括其徽标。
- 《Mythras》和《Mythras Imperative》——作为名称，用于归属时除外，包括其徽标。
- 在《Classic Fantasy Imperative》中发现的所有艺术作品
- _Alexandra the Pious_
- _Barony of Ostwyn_
- _Barony of Volstad_
- _County of Thale_
- _Grand Duchy of Bethany_
- _Grand Duchy of Pelende_
- _Greymyr_
- _Inwils Isle_
- _Inwils the Sage_
- _King Korac of Norsgard_
- _Lilly Tanglefoot_
- _Lorissa of Stormholm_
- _Miranda Drake_
- _Mystamyr_
- _Mystamyr and the Borderlands_
- _Rengarth Hightower_
- _Runewood Forest_
- _Sorack Blackwolf_
- _Tashana Moonshadow_
- _The Dunfel Inn_
- _Faewood Vale_
- _The Elven Lands of Lorendel_
- _The Iron Kingdom of the Dwarves_
- _The Island Nations of Valencia_
- _The Kingdom of Greymyr_
- _The Northern Territories of Norsgard_
- _The Orc Blight Mountains_
- _The Pharaonic Lands of Aegypt_
- _The Shattered Territories_
- _The Shenzhou Monastery_
- _The Spider Wald_
- _The Undead Realms of Ravenholm_
- _The War-Torn Hinterlands_
- _The World of Areath_
- _Town of Dunfel_
- _Valamir Drake_

---
## d100 新手入门？

《Classic Fantasy Imperative》是一个 d100 或百分比系统。百分比骰子，即 1d100，用于解决关键行动——技能使用、战斗、魔法施放等。这是一个向下掷骰系统，意味着目标数字以百分比表示（例如，体能 65%），游戏主持人和玩家都需要掷出 1d100，点数等于或小于该目标数字，以取得成功。如果愿意，可以非常轻松地用 d20 替换 1d100，并且所有百分比都可以除以 5（向上取整）来获得 d20 掷骰的目标数字。在我们的示例中，体能 65% 将变为体能 13。然而，1d100 提供了大量的灵活性和细微差别，这是整个游戏的基石，因此我们建议先尝试 1d100 方法。虽然必须掷出“低于”某个数值可能显得违反直觉（在许多游戏中，通常是越高越好！），但拥有一个需要掷出“在范围之内”的目标数字，使得观察成功几率变得既简单又直观，并允许进行相当多的“骰子技巧”，例如对抗掷骰、大成功和大失误，以及这些规则后续探讨的其他一些事项。百分比制角色扮演已经存在很长时间了，是一个有着久经考验的核心机制的成熟游戏系统，它灵活、直观，并且在游戏过程中往往会自然融入背景中。

---
## 简化

《Mythras》和《Classic Fantasy》的长期拥有者会注意到，在某些地方，《Classic Fantasy Imperative》规则已得到简化。这样做是为了让游戏主持人能够以最小的麻烦更快地向新玩家介绍游戏。《Classic Fantasy Imperative》不同的另一个领域是采用了英制计量单位而不是公制。同时包含两者会占用太多空间，并且在处理远程武器等内容时需要多个表格。选择英制系统仅仅是为了方便使用现有的无数战斗地图，并使转换使用英制计量单位的其他游戏系统的冒险更加简单。在填写您的角色卡时，请随意使用附录中的转换表，以及您认为最有用和最熟悉的任何计量系统。

---
## 数字和结果的取整

有时您需要进行数字除法——通常是技能等级（例如用于确定大成功，即技能值的 1/10）。每当除法结果产生小数时，始终向上取整为整数。例如，64% 的 1/10 是 6.4；向上取整为 7。

---
## 游戏中使用的骰子

《Classic Fantasy Imperative》使用标准的多面骰子集：d4, d6, d8, d10, d12, d20 和 d100。此外，还需要以下骰子：

- **d2：** 掷任何骰子。奇数等于 1，偶数等于 2。或者掷硬币。

- **d3：** 掷一颗六面骰；1-2 = 1，3-4 = 2，5-6 = 3。