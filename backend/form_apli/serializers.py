from rest_framework import serializers
from .models import ReciboProvisional


class ReciboProvisionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReciboProvisional
        fields = (
            'id', 'nombre', 'cantidad', 'dni', 'ruc', 'direccion', 'telefono_fijo', 
            'numero_celular', 'local', 'ubicacion', 'area', 'uso_exclusivo', 'correo', 
            'renta_mensual', 'garantia', 'mes_adelantado', 'dias_alquiler', 
            'fecha_inicio', 'mantenimiento', 
            'suministro_luz', 'observacion'
        )
        read_only_fields = ['id', 'total_recibo_provisional']
