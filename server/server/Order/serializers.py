from rest_framework import serializers
from .models import Order, OrderDetail
from Product.serializers import ProductSerializer
from Settings.serializers import CourierSerializer, DeliveryTypeSerializer
from CustomUser.serializers import UserSerializer
from Product.models import Product


# order detail
class OrderDetailCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ['product', 'bdtRate', 'quantity',
                  'linePrice', 'size', 'color', 'created_at', 'updated_at']


class OrderDetailSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderDetail
        fields = ['id', 'order', 'product',
                  'bdtRate', 'quantity', 'linePrice', 'size', 'color',  'created_at', 'updated_at']


class UnpaginateOrderDetailSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    order = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderDetail
        fields = ['id', 'order', 'product',
                  'bdtRate', 'quantity', 'linePrice', 'size', 'color',  'created_at', 'updated_at']


# order
class OrderSerializer(serializers.ModelSerializer):
    order_details = OrderDetailSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'order_no', 'invoice_no',
                  'courier', 'customer', 'delivery_type',
                  'order_date_time', 'order_date', 'delivery_status', 'payment_method', 'note',
                  'total_item', 'total_amount',  'discount', 'payable_amount', 'paid_amount',
                  'due_amount', 'delivery_charge', 'grand_total_amount',
                  'order_details',  'created_at', 'updated_at']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method == 'GET':
            self.fields['order_details'] = OrderDetailSerializer(many=True)

    def validate_order_details(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError(
                "order_details must be a list of items")
        if not value:
            raise serializers.ValidationError("order_details cannot be empty")
        return value

    def create(self, validated_data):
        order_details_data = validated_data.pop('order_details')

        order = Order.objects.create(**validated_data)

        for order_detail_data in order_details_data:
            OrderDetail.objects.create(order=order, **order_detail_data)

            # order stock  update in product table
            currProd = Product.objects.get(
                id=order_detail_data['product'].id)

            # stock
            Product.objects.filter(id=order_detail_data['product'].id).update(
                initial_stock=currProd.initial_stock - order_detail_data['quantity'])

        return order


class UnpaginateOrderSerializer(serializers.ModelSerializer):
    courier = CourierSerializer()
    customer = UserSerializer()
    delivery_type = DeliveryTypeSerializer()
    order_details = UnpaginateOrderDetailSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'order_no', 'invoice_no',
                  'courier', 'customer', 'delivery_type',
                  'order_date_time', 'order_date', 'delivery_status', 'payment_method', 'note',
                  'total_item', 'total_amount',  'discount', 'payable_amount', 'paid_amount',
                  'due_amount', 'delivery_charge', 'grand_total_amount',
                  'order_details',  'created_at', 'updated_at']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method == 'GET':
            self.fields['order_details'] = OrderDetailSerializer(many=True)

    def validate_order_details(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError(
                "order_details must be a list of items")
        if not value:
            raise serializers.ValidationError("order_details cannot be empty")
        return value

    def create(self, validated_data):
        order_details_data = validated_data.pop('order_details')

        order = Order.objects.create(**validated_data)

        for order_detail_data in order_details_data:
            OrderDetail.objects.create(order=order, **order_detail_data)

        return order
