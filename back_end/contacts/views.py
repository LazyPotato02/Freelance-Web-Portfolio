from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import ContactFormSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def submit_contact_form(request):
    serializer = ContactFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "message": "Form submitted successfully."})
    else:
        return Response({"status": "error", "message": "There was an error submitting the form."})
