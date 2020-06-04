
import ujson, urequests, utime
Key="SL app key"
def SL_setup():
    urlBase = "https://api.systemlinkcloud.com/nitag/v2/tags/"
    Key =  secrets.Key
    headers = {"Accept":"application/json","x-ni-api-key":Key}
    return urlBase, headers

def Get_SL(Tag):
    urlBase, headers = SL_setup()
    urlValue = urlBase + Tag + "/values/current"
    try:
         value = urequests.get(urlValue,headers=headers).text
         data = ujson.loads(value)
         result = data.get("value").get("value")
    except Exception as e:
         print(e)
         result = 'failed'
    return result
