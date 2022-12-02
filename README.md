# test_nevatrip

![скрин](https://github.com/Electr0Nick/test_nevatrip/blob/main/img/screenshot.png?raw=true)

### Описание:

Небольшая работа, выполненная в качестве тестового задания при рассмотре на вакантное место в одной из компаний.

---
### Макет:

[Макет в Figma](https://www.figma.com/file/JyFQcxiynMH1i5ViWz4qi0/Layout-test-task?node-id=0%3A1)


---
### Задачи:

<details>
    <summary>1. Верстка блока</summary>
  
>Нужно сверстать страницу по макету по принципу mobile-first.
  
>Примечания:
>- Если времен больше чем на 1 строчку, то в конце строчки должна появиться кнопка "ещё..." при нажатии на которую будут раскрываться скрытые времена.
>- Под ценой может не быть надписи "1200₽ на причале" в таком случае цена должна быть выровнена посередине относительно копки "подробнее"
</details>

<details>
    <summary>2. Время из A в B</summary>
      
>Известно расписание отправления теплохода по московскому времени (GMT+3):
  
>из A в B:
>- 2021-08-21 18:00:00
>- 2021-08-21 18:30:00
>- 2021-08-21 18:45:00
>- 2021-08-21 19:00:00
>- 2021-08-21 19:15:00
>- 2021-08-21 21:00:00
  
>из B в A:
>- 2021-08-21 18:30:00
>- 2021-08-21 18:45:00
>- 2021-08-21 19:00:00
>- 2021-08-21 19:15:00
>- 2021-08-21 19:35:00
>- 2021-08-21 21:50:00
>- 2021-08-21 21:55:00
  
>"из A в B" и "из B в A" стоимость одного билета 700р.
>"из A в B и обратно в А" стоимость составного билета 1200р
>Время пути в одну сторону 50 минут.

>**Задача.**<br>
>Сделать страницу (дизайн не имеет значения) на которой пользователь выбрав направление, время и количество билетов сможет посчитать итоговые значения: общую стоимость, время в пути.
>Как это должно выглядеть?
>На странице пользователь сначала должен выбрать направление:
```html
<select name="route" id="route">
  <option value="из A в B">из A в B</option>
  <option value="из B в A">из B в A</option>
  <option value="из A в B и обратно в А">из A в B и обратно в А</option>
</select>
```
>После чего предлагается пользователю выбрать время. Важно, время показываем в часовом поясе пользователя.
>Предположим, что на всех его устройствах стоит запрет перевода времени в локальный часовой пояс.
```html
<label for="time">Выберите время</label>
<select name="time" id="time">
  <option value="18:00(из A в B)">18:00(из A в B)</option>
  <option value="18:30(из A в B)">18:30(из A в B)</option>
  <option value="18:45(из A в B)">18:45(из A в B)</option>
  <option value="19:00(из A в B)">19:00(из A в B)</option>
  <option value="19:15(из A в B)">19:15(из A в B)</option>
  <option value="21:00(из A в B)">21:00(из A в B)</option>
  <option value="18:30(из B в A)">18:30(из B в A)</option>
  <option value="18:45(из B в A)">18:45(из B в A)</option>
  <option value="19:00(из B в A)">19:00(из B в A)</option>
  <option value="19:15(из B в A)">19:15(из B в A)</option>
  <option value="19:35(из B в A)">19:35(из B в A)</option>
  <option value="21:50(из B в A)">21:50(из B в A)</option>
  <option value="21:55(из B в A)">21:55(из B в A)</option>
</select>
```
>Если выбрано время "из A в B и обратно в А", то должен показаться дополнительный селект, в котором можно будет выбрать обратное время.
>Обратите внимание, что время не должно пересекаться.
>Это значит, что следует учитывать, что если путь из А в В был выбран в 14:00, то обратный путь возможен только по прибытию на место в пункт В.
>Далее ползователю прелагается выбрать количество билетов и нажать на кнопку "посчитать".
```html
<label for="num">Количество билетов</label>
<input id="num">
<button>Посчитать</button>
```
>При клике на кнопку "Посчитать" показать результат с направлением, временем в пути, временем отправления и временем прибытия в часовом поясе пользователя.
>Например:
```
Вы выбрали 4 билета по маршруту из A в B стоимостью 4000р.
Это путешествие займет у вас 40 минут. 
Теплоход отправляется в 12-00, а прибудет в 18-00.
```
</details>

---
### Результат:
[test_nevatrip на GithubPages](https://electr0nick.github.io/test_nevatrip/)


---
### Стек используемых технологий:
![HTML](https://img.shields.io/badge/HTML-000?style=for-the-badge&logo=HTML5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-000?style=for-the-badge&logo=CSS3&logoColor=1572B6)
![SCSS](https://img.shields.io/badge/SCSS-000?style=for-the-badge&logo=Sass&logoColor=CC6699) 
![BEM](https://img.shields.io/badge/BEM-000?style=for-the-badge&logo=BEM&logoColor=1E90FF)
![JavaScript](https://img.shields.io/badge/JS-000?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E)
![GIT](https://img.shields.io/badge/GIT-000?style=for-the-badge&logo=Git&logoColor=F05032)

Дополнительно:

![VSC](https://img.shields.io/badge/VSC-000?style=for-the-badge&logo=VisualStudioCode&logoColor=007ACC)
![FIGMA](https://img.shields.io/badge/FIGMA-000?style=for-the-badge&logo=Figma&logoColor=F24E1E)
![PS](https://img.shields.io/badge/PS-000?style=for-the-badge&logo=AdobePhotoshop&logoColor=31A8FF)
![GITHUB](https://img.shields.io/badge/GITHUB-000?style=for-the-badge&logo=GitHub&logoColor=FFF)
![MD](https://img.shields.io/badge/MD-000?style=for-the-badge&logo=Markdown&logoColor=FFF) 
