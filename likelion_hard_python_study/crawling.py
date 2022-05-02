import requests

url = "http://www.daum.net"
#print(requests.get(url)) ## <Response [200]> -> 200이 나오면 성공을 의미한다.
## 이를 response에 저장해보도록 하겠다.
response = requests.get(url)
#print(response.text) ## html 코드를 가져왔다고 할 수 있다.
## html을 앞에서 배워본적이 있으니, 여기서 이제 html 테그들을 이해할 수 있겠지? 
## 테그를 통해서 자신이 원하는 정보들도 가져올 수 있다.
#print(response.url) ## 주소를 가져온다.
#print(response.content) ## contents 를 가져온다.
#print(response.encoding) ## encoding 방식를 가져온다.
print(response.headers) ## header를 가져온다.
#print(response.json) ## json을 가져온다.
#print(response.links) ## 링크들을 가져온다.
#print(response.ok) ## 요청 허용 여부를 가져온다.
## https://docs.python-requests.org/en/master/api/#requests.Response