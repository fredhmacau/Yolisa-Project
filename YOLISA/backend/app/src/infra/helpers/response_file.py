from fastapi import responses
def response_files(file,file_type):
    return responses.Response(file,
                                  status_code=200,
                                  media_type=file_type)