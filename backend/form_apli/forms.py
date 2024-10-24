from django import forms
from .models import ReciboProvisional

class ReciboProvisionalForm(forms.ModelForm):
    class Meta:
        model = ReciboProvisional
        fields = '__all__'
