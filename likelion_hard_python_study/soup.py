import requests
from bs4 import BeautifulSoup
webpage = requests.get("http:www.naver.com")
soup = BeautifulSoup(webpage.content, "html.parser") ## 밑줄 부분의 타입 변경 가능
print(soup)