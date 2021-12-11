---

layout:     post

header-img: img/post-bg-ios9-web.jpg

catalog: true

tags:

    - Python

---


使用python对excel进行一些操作


```python

from openpyxl import Workbook, load_workbook
from openpyxl.utils import get_column_letter
from openpyxl.styles import Font

#参考文献：https://openpyxl.readthedocs.io/en/stable/


# wb = load_workbook('excel.xlsx')

#step1 修改单元格

# ws = wb.active

# ws['A3'].value = '小黑皮'

# wb.save('excel.xlsx')



#step2 打印所有工作表

# print(wb.sheetnames)



#step3 使用某个工作表

# ws = wb['Sheet2']

# print(ws)



#step4 创建工作表

# wb.create_sheet('qq')

# wb.save('excel.xlsx')

# print(wb.sheetnames)



#step5 创建excel文档，添加行

# wb = Workbook()

# ws = wb.active

# ws.titile = 'qq' #新sheet名字

# ws['A1'].value = 35345

# ws.append([12,45,567,678]) #添加一行

# ws.append([12,45,567,678])

# wb.save('auto.xlsx')





#step6 读取范围数据

# wb = load_workbook('auto.xlsx')

# ws = wb.active

# for row in range(1, 4):

#     for col in range(1, 5):

#         char = get_column_letter(col)

#         print(ws[char + str(row)].value) #打印单元格里数据

#这里也可以修改，并且保持





#step7 合并单元格

# wb = load_workbook('auto.xlsx')

# ws = wb.active

#

# ws.merge_cells('A1:E1')

# ws.unmerge_cells('A1:E1') #取消合并

# wb.save('auto.xlsx')





#step8 插入行或者列

# wb = load_workbook('auto.xlsx')

# ws = wb.active

# ws.insert_rows(2) #第二行插入

# ws.delete_cols(2) #删除

# ws.insert_cols(2) #第二列插入

# wb.save('auto.xlsx')





#step9 移动资料

# wb = load_workbook('auto.xlsx')

# ws = wb.active

# ws.move_range('A1:D3', rows=2, cols=3) #本地尝试无法移动，没有move_range，可能是版本问题

# wb.save('auto.xlsx')



#step10 练习

wb = Workbook()
ws = wb.active

data = [
    {
        'name': '小白',
        'tall': 180,
        'age': 23,
        'weight': 83
    },
    {
        'name': '小白1',
        'tall': 181,
        'age': 21,
        'weight': 81
    },
    {
        'name': '小白2',
        'tall': 182,
        'age': 22,
        'weight': 82
    },
]

title = ['姓名', '身高', '年纪', '体重']
ws.append(title)

for person in data:
    ws.append(list(person.values()))

for col in range(2, 5):
    char = get_column_letter(col)
    ws[char + '5'] = f'=AVERAGE({char + "2"}: {char + "4"})'  #用函数来计算平均值

#标题加粗

for col in range(1, 5):
    char = get_column_letter(col)
    ws[char + '1'].font = Font(bold=True, color="000000FF")
wb.save('data.xlsx')



```