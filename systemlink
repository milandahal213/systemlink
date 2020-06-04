import ujson, urequests, utime
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


def SL_setup():
     urlBase = "https://api.systemlinkcloud.com/nitag/v2/tags/"
     SL_Appkey = secrets.SL_api_key #Systemlink App key from NI
     headers = {"Accept":"application/json","x-ni-api-key":SL_Appkey}
     return urlBase, headers

def Put_SL(Tag, Type, Value):
     urlBase, headers = SL_setup()
   
     urlValue = urlBase + Tag + "/values/current"
     
     propValue = {"value":{"type":Type,"value":Value}}
     try:
          reply = requests.put(urlValue,headers=headers,json=propValue).text
     except Exception as e:
          print(e)
          reply = 'failed'
     return reply
     
def Get_SL(Tag):
     urlBase, headers = SL_setup()
     urlValue = urlBase + Tag + "/values/current"
     try:
          value = requests.get(urlValue,headers=headers).text
          data = json.loads(value)
          result = data.get("value").get("value")
     except Exception as e:
          print(e)
          result = 'failed'
     return result
