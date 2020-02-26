---

title: 内部排序

meta:

  - name: description

    content: 数据结构内部排序

  - name: keywords

    content: 页面关键词（为了SEO）

date: 2019-12-06

update_date: 2019-12-06
 
tags: 

  - 数据结构

banner: '/haha.png'

copyright: 博文版权，默认：允许转载，需保留原文链接，著作权归博主所有

password: false

comment: true
---

## 简单排序
###  1. 插入排序
排序思想：将未排序的记录R，插入到已经排好序的记录表中
```c
void insert(int data[],int length)
{
	for(int p=0;p<=length-1;p++)
	{
		int q=data[p];
		int i;
		for(i=p-1;i>=0&&data[i]>q;i--)
		{
			data[i+1]=data[i];
		}
		data[i+1]=q;
	}
}

```
### 2. 冒泡排序
排序思想：每一次比较相邻的两个记录的关键字
```c
void bubble_sort(int data[],int length)
{
	for(int last=length-1;last>=0;last--)
	{
		for(int i=0;i<last-1;i++)
		{
			if(data[i]>data[i+1])
			{
				swap(data,i,i+1);
			}
		}

	}
}
```

 3. 选择排序
 排序思想：

## 先进排序
1. Shell排序
2. 快速排序
3. 堆排序
4. 归并排序

## 基数排序


