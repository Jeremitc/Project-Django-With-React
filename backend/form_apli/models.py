from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class ReciboProvisional(models.Model):
    nombre = models.CharField(max_length=255)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    dni = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(99999999)])
    ruc = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(99999999999)])
    direccion = models.CharField(max_length=255)
    telefono_fijo = models.CharField(max_length=20, blank=True, null=True)  # Campo opcional
    numero_celular = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(999999999)])
    local = models.CharField(max_length=50)
    ubicacion = models.CharField(max_length=255)
    area = models.DecimalField(max_digits=5, decimal_places=2)
    uso_exclusivo = models.CharField(max_length=255)
    correo = models.EmailField()
    renta_mensual = models.DecimalField(max_digits=10, decimal_places=2)
    garantia = models.DecimalField(max_digits=10, decimal_places=2)
    mes_adelantado = models.DecimalField(max_digits=10, decimal_places=2)
    dias_alquiler = models.IntegerField()
    total_recibo_provisional = models.DecimalField(max_digits=12, decimal_places=2)
    fecha_inicio = models.DateField()
    mantenimiento = models.DecimalField(max_digits=10, decimal_places=2)
    suministro_luz = models.CharField(max_length=50)
    observacion = models.TextField()

    def save(self, *args, **kwargs):
        self.total_recibo_provisional = self.renta_mensual + self.garantia
        super(ReciboProvisional, self).save(*args, **kwargs)

 
    
