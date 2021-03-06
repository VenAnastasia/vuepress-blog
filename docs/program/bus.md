---

title: 系统总线

meta:

  - name: description

    content: 系统总线

  - name: keywords

    content: 页面关键词（为了SEO）

date: 2019-12-08

update_date: 2019-12-08
 
tags: 

  - 计算机组成原理

banner: '/15.jpg'

copyright: 博文版权，默认：允许转载，需保留原文链接，著作权归博主所有

password: false

comment: true

---
## Info
本文为学习哈工大相关慕课所做的总结笔记。放上链接：[计算机组成原理](https://www.icourse163.org/course/HIT-309001)

一张思维导图：  
![](https://s2.ax1x.com/2019/12/09/QdqxXj.png)

## 一、总线的基本概念
### 1. 为什么要用Bus?
便于增减外设，同时减少了信息传输线的条数。
### 2. 什么是总线
总线是连接各个部件的信息公共传输线。
### 3. 总线上信息的传送
分为两种：串行和并行。串行就是把要传输的信息一位一位地放到总线上，接收方也一位一位的接收数据；并行则是多位数据同时放到总线上，接收方也同时接收多位数据。并行传输需要多条数据线，若传输距离较长，线与线之间会互相干扰，导致接收方不能接受到正确信息。<u>一般情况下，串行适用于远距传输（设备与设备之间），并行适用于短距传输（计算机机箱内部）。</u>
### 4. 总线结构的计算机举例
#### (1) 单总线（系统总线）结构
#### (2) 面向CPU（M-bus）的双总线结构
M总线连接CPU和主存，I/O设备连接在I/O总线上。
![面向CPU的双总线结构](https://s2.ax1x.com/2019/12/08/Qa4AGn.md.png)
#### (3) 以存储器为中心（存储总线）的双总线结构
在单总线结构的基础上在`CPU与主存之间`增加存储总线。

## 二、总线的分类 
分类标准：位于计算机系统的位置
### 1. 片内总线
`芯片内部`的总线。
### 2. 系统总线
`计算机各部件之间`的信息传输线。  
![系统总线](https://s2.ax1x.com/2019/12/08/QdAOBV.png)
### 3. 通信总线
用于`计算机系统之间`或`计算机系统与其他系统`（控制仪表、移动通信等）之间的通信。  
传输方式分为串行和并行两种。

## 三、总线特性及性能指标
### 1. 总线特性
![总线特性](https://s2.ax1x.com/2019/12/08/QdEgC4.png)
### 2. 性能指标
![性能指标](https://s2.ax1x.com/2019/12/08/QdEU3j.png)
### 3. 总线标准
![总线标准](https://s2.ax1x.com/2019/12/08/QdV2o8.md.png)

## 四、总线结构
总线传输：某一时刻只允许有一个部件向总线发送信息。
### 1. 单总线结构
### 2. 多总线结构
#### (1) 双总线（将I/O设备从系统总线上分离）
![](https://s2.ax1x.com/2019/12/08/QdeL24.md.png)
#### (2) 三总线（在主存与I/O设备之间增加DMA总线）
![](https://s2.ax1x.com/2019/12/08/Qde75T.md.png)
#### (3) 三总线（局部总线、系统总线、扩展总线）
![](https://s2.ax1x.com/2019/12/08/QdeqGF.md.png)
#### (4) 四总线（增加高速总线）
![](https://s2.ax1x.com/2019/12/08/QdebPU.md.png)
### 3. 总线结构举例
#### (1) 传统微型机总线结构（2条总线）
![](https://s2.ax1x.com/2019/12/08/Qdua2F.md.png)
#### (2) VL-BUS局部总线结构（3条总线）
![](https://s2.ax1x.com/2019/12/08/QduU8U.md.png)
#### (3) PCI总线结构（增加PCI桥）
![](https://s2.ax1x.com/2019/12/08/QduNCT.md.png)
#### (4)多层PCI总线结构
![](https://s2.ax1x.com/2019/12/08/QduY5V.md.png)

## 五、总线控制
### 1. 总线判优控制
主设备：对总线有控制权，从设备：响应从主设备发来的总线命令。   
总线判优控制分为`集中式`和`分布式`（分散到各个端口上）。  
集中式又分为`链式查询`、`计数器定时查询`和`独立请求`三种方式。
#### (1) 链式查询
#### (2) 计数器定时查询
#### (3) 独立请求
### 2. 总线通信控制
#### (1) 目的
结局通信双方`协调配合`问题。
#### (2) 总线传输周期
##### a. 申请分配阶段：`主模块申请`，总线仲裁决定  
##### b. 寻址阶段：主模块向从模块`给出地址和命令`
##### c. 传数阶段：主模块和从模块`交换数据`
##### d. 结束阶段：主模块`撤销有关消息`
#### (3) 总线通信的四种方式
##### a. 同步通信：有`统一时标`控制数据传送
##### b. 异步通信：采用`应答方式`
##### c. 半同步通信：`同步、异步结合`
##### d. 分离式通信：充分`挖掘系统总线每个瞬间的潜力`

