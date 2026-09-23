# Classic Fantasy Imperative 系统资源文档

版本 1.0，2023 年 9 月

_Classic Fantasy Imperative_ 是 _Mythras_ 规则集的一个开放、采用 ORC 授权的版本，专注于地牢探索、宏大的冒险以及涉及宝藏、魔法和致命敌人的紧张遭遇战。_Classic Fantasy Imperative_ 沿袭了该领域首个角色扮演游戏的原始快感，但通过 _Mythras_ 游戏系统的视角进行呈现——该系统基于 1d100（百分比），而非使用 d20。

本文件提供了一套全面但不详尽的规则，包括角色创建、角色种族与职业、技能、特定常见情况的规则、战斗以及魔法——这足以让玩家和游戏主持人（Games Master）上手，并为进一步的发展奠定坚实的基础。_Classic Fantasy Imperative_ 与 _Classic Fantasy Imperative_、_Mythras_ 核心规则以及 _Mythras Imperative_ 完全兼容。此外，它还与其他采用 ORC 授权的百分比游戏系统兼容。

---
## ORC 授权

_Classic Fantasy Imperative_ 使用 ORC 授权发布。ORC 授权为游戏创作者提供了一种公开分享其游戏机制的方式，并允许下游用户自由使用、修改和重新分享这些游戏机制的改编版本。

在 ORC 下公开分享的内容被称为**授权材料（Licensed Material）**，包括游戏的广泛功能要素，例如数据块、游戏规则、角色属性、游戏固有的方法和系统，以及许可方明确希望分享的任何其他内容。该授权非常广泛，允许您在全球范围内将授权材料与印刷书籍、电子游戏、播客、人工智能或未来可能存在或创造的任何其他技术相关联使用。_Classic Fantasy Imperative_ 中的绝大部分内容构成了授权材料。

不在 ORC 下分享的内容被称为**保留材料（Reserved Material）**，包括商标、世界设定、故事弧、独特的角色以及视觉艺术。我们在下方的 ORC 公告中列出了保留材料。

根据 ORC 授权，只要您以出版作品中的公告形式给予适当的署名，您就可以按照自己认为合适的方式使用、分享、改编和构建授权材料。此公告既可以归功于上游许可方及其对作品的贡献，也可以为下游用户提供一种简便的方式来注明公告所出现作品的作者。通过使用 ORC 授权的材料，您即自动同意在您的出版作品中按照相同条款授权您的游戏机制。如果您开发了自己的保留材料，那是您的专属财产。

#### ORC 公告

_Classic Fantasy Imperative_ 采用位于美国国会图书馆的 ORC 授权，并可在包括 [Paizo.com](https://paizo.com/community/blog/v5748dyo6sico?ORC-License-The-Final-Version-is-Here) 在内的多个地点在线获取。

所有保证均按照其中的规定进行免责声明。

#### 署名

本产品基于以下保留材料：

- _Mythras_，The Design Mechanism 版权所有 2016，作者：Pete Nash 和 Lawrence Whitaker
- _Classic Fantasy Imperative_，The Design Mechanism 版权所有 2016，作者：Rodney Leary、Pete Nash 和 Lawrence Whitaker

如果您在自己的出版作品中使用我们的授权材料，请按如下方式署名：

_**基于 Classic Fantasy Imperative，由 Rodney Leary、Pete Nash 和 Lawrence Whitaker 编写，并由 The Design Mechanism 出版，版权所有 2023**_

#### 保留材料

请注意，由 The Design Mechanism 出版的 _Classic Fantasy Imperative_ 的母体游戏 _Classic Fantasy_ 和 _Mythras_ 在 ORC 授权下被指定为保留材料。

如果您希望使用 _Classic Fantasy Imperative_ 或 _Mythras_ 中的内容，请联系 The Design Mechanism 了解独立的 Mythras 网关授权（Mythras Gateway License），该授权允许免费访问保留材料，但需满足关于审批和署名的一些条件。

以下内容也被视为保留材料，具体如下：

- _Classic Fantasy_ 和 _Classic Fantasy Imperative_ – 作为名称，署名时使用的情况除外，包括其徽标。
- _Mythras_ 和 _Mythras Imperative_ – 作为名称，署名时使用的情况除外，包括其徽标。
- _Classic Fantasy Imperative_ 中出现的所有艺术作品
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
- _Mystamyr and the Boarderlands_
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
## 初识 d100？

_Classic Fantasy Imperative_ 是一个 d100 或百分比系统。百分比骰子（1d100）用于解决关键动作——技能使用、战斗、魔法施放等。这是一个向下掷骰系统，意味着目标数字以百分比表示（例如：体能 65%），游戏主持人和玩家都需要使用 1d100 掷出等于或低于该目标数字的点数，以获得成功。如果需要，很容易用 d20 替换 1d100，所有百分比都可以除以 5（向上取整）来获得 d20 掷骰的目标数字。在我们的示例中，体能 65% 将变为体能 13。然而，1d100 提供了支持整个游戏的巨大灵活性和细微差别，因此我们建议先尝试 1d100 方法。虽然必须掷出“低于”某个数值可能显得不直观（在许多游戏中，数值通常越高越好！），但拥有一个需要掷出“之内”的百分比范围作为目标数字，可以让你简单明了地看到成功的几率，并允许在这些规则中稍后探讨的“掷骰技巧”，如对抗掷骰、大成功和大失误等。百分比角色扮演游戏已经存在了很长时间，是一个稳固确立的游戏系统，拥有经过验证的核心机制，既灵活又直观，并且在游戏过程中往往会自然而然地融入背景。

---
## 简化

_Mythras_ 和 _Classic Fantasy_ 的长期拥有者会注意到，在某些地方 _Classic Fantasy Imperative_ 的规则已经简化。这样做是为了让游戏主持人能够以最少的麻烦更快地向新玩家介绍游戏。_Classic Fantasy Imperative_ 不同的另一个领域是采用了英制单位而非公制单位。同时纳入两者会占用太多空间，并且在处理远程武器等内容时需要多个表格。选择英制系统仅仅是为了方便使用现有的无数战斗垫，并使转换使用英制单位的其他游戏系统的冒险更加简单。在填写角色卡时，请随意使用附录中的转换表，以及您认为最有用和最熟悉的测量系统。

---
## 数字与结果的取整

在某些情况下，您需要进行除法运算——通常是技能等级（例如用于确定大成功，即技能值的 1/10）。每当除法结果产生小数时，始终向上取整为整数。例如，64% 的 1/10 是 6.4；向上取整为 7。

---
## 游戏中使用的骰子

_Classic Fantasy Imperative_ 使用标准的多元骰子组：d4、d6、d8、d10、d12、d20 和 d100。此外，还需要以下骰子：

- **d2：** 掷任何骰子。奇数等于 1，偶数等于 2。或者掷硬币。

- **d3：** 掷一个六面骰；1-2 = 1，3-4 = 2，5-6 = 3。