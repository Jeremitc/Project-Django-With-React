from django.shortcuts import render, redirect
from .forms import ReciboProvisionalForm


def index_view(request):
    return render(request, 'index.html')
def login_view(request):
    return render(request, 'login.html')
def register_view(request):
    return render(request, 'registrer.html')
def forms_view(request):
    return render(request, 'forms.html')
def crear_recibo(request):
    if request.method == 'POST':
        form = ReciboProvisionalForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('ruta_a_la_vista_donde_se_redirige')
    else:
        form = ReciboProvisionalForm()
    return render(request, 'forms.html', {'form': form})


