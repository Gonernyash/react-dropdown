# Dropdown-menu.
Dropdown-menu created using React(create-react-app).

## Introducing
Inspired by my last project [Country-picker](https://github.com/Gonernyash/Country-picker) i decided to create universal customizeble dropdown-menu.

As an example here is country picker. Each item has unique id, country title and flag icon. All items properties are kept in [items.json](https://github.com/Gonernyash/react-dropdown/blob/main/items.json).

## Tips
[DropdownContainer.js](https://github.com/Gonernyash/react-dropdown/blob/main/dropdownContainer.js)  is main file with settings inside it. You are able to:
 - Redact item structure.
 - Change items data located in [items.json](https://github.com/Gonernyash/react-dropdown/blob/main/items.json).
 - Enable/disable recent-items list (see work demonstaration).
 - Choose items displayed in recent list.

[dropdownIconsLoader.js](https://github.com/Gonernyash/react-dropdown/blob/main/dropdownIconsLoader.js) is file that loading icons from [icons folder](https://github.com/Gonernyash/react-dropdown/tree/main/icons). 

## Work demonstration:

### Selecting:
![selecting](/readme-gifs/selecting.gif)

### Recently picked items list: 
![fav-demonstration](/readme-gifs/fav-demonstration.gif)

### Search:
![search](/readme-gifs/search.gif)