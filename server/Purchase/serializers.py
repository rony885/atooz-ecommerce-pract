from rest_framework import serializers
from .models import Purchase, PurchaseDetail
from Settings.serializers import SupplierSerializer
from Product.serializers import ProductSerializer
from Product.models import Product


class PurchaseDetailCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseDetail
        fields = ['product', 'bdtRate', 'quantity',
                  'linePrice', 'created_at', 'updated_at']


class PurchaseDetailSerializer(serializers.ModelSerializer):
    purchase = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = PurchaseDetail
        fields = ['id', 'purchase', 'product',
                  'bdtRate', 'quantity', 'linePrice', 'created_at', 'updated_at']


class UnpaginatePurchaseDetailSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    purchase = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = PurchaseDetail
        fields = ['id', 'purchase', 'product',
                  'bdtRate', 'quantity', 'linePrice', 'created_at', 'updated_at']


class PurchaseSerializer(serializers.ModelSerializer):
    purchase_details = PurchaseDetailSerializer(many=True)

    class Meta:
        model = Purchase
        fields = ['id', 'purchase_no', 'invoice_no', 'purchase_date_time', 'purchase_date',
                  'supplier', 'total_item', 'total_amount', 'discount', 'grand_total_amount', 'purchase_details', 'created_at', 'updated_at']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method == 'GET':
            self.fields['purchase_details'] = PurchaseDetailSerializer(
                many=True)

    def validate_purchase_details(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError(
                "purchase_details must be a list of items")
        if not value:
            raise serializers.ValidationError(
                "purchase_details cannot be empty")
        return value

    def create(self, validated_data):
        purchase_details_data = validated_data.pop('purchase_details')
        purchase = Purchase.objects.create(**validated_data)

        for purchase_detail_data in purchase_details_data:
            PurchaseDetail.objects.create(
                purchase=purchase, **purchase_detail_data)

            # purchase stock and price update in product table
            currProd = Product.objects.get(
                id=purchase_detail_data['product'].id)

            # stock
            Product.objects.filter(id=purchase_detail_data['product'].id).update(
                purchase_stock=currProd.purchase_stock + purchase_detail_data['quantity'])

            # price
            Product.objects.filter(id=purchase_detail_data['product'].id).update(
                purchase_price=float(purchase_detail_data['bdtRate']))

            # Product.objects.filter(id=purchase_detail_data['product'].id).update(
            #     p_purchase_price=float(((float(currProd.p_purchase_price) * currProd.p_purchase_stock) +
            #                             (float(purchase_detail_data['bdtRate']) * purchase_detail_data['quantity'])))
            #     / (currProd.p_purchase_stock + purchase_detail_data['quantity']))

        return purchase


class UnpaginatePurchaseSerializer(serializers.ModelSerializer):
    supplier = SupplierSerializer(read_only=True)
    purchase_details = UnpaginatePurchaseDetailSerializer(many=True)

    class Meta:
        model = Purchase
        fields = ['id', 'purchase_no', 'invoice_no', 'purchase_date_time', 'purchase_date',
                  'supplier', 'total_item', 'total_amount', 'discount', 'grand_total_amount', 'purchase_details', 'created_at', 'updated_at']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method == 'GET':
            self.fields['purchase_details'] = PurchaseDetailSerializer(
                many=True)

    def validate_purchase_details(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError(
                "purchase_details must be a list of items")
        if not value:
            raise serializers.ValidationError(
                "purchase_details cannot be empty")
        return value

    def create(self, validated_data):
        purchase_details_data = validated_data.pop('purchase_details')
        purchase = Purchase.objects.create(**validated_data)

        for purchase_detail_data in purchase_details_data:
            PurchaseDetail.objects.create(
                purchase=purchase, **purchase_detail_data)

        return purchase
