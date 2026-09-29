(function() {
    var preconnectOrigins = ["https://cdn.shopify.com", "https://extensions.shopifycdn.com"];
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.QSVzdYsv.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.DdDscdWN.js", "/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.DDpcaSqU.js", "/cdn/shopifycloud/checkout-web/assets/c1/context-browser.Cjla8Cf_.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.Cnwy8G2v.js", "/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.BnHLRwvm.js", "/cdn/shopifycloud/checkout-web/assets/c1/shared-shop-theme.BKb8cP_L.js", "/cdn/shopifycloud/checkout-web/assets/c1/helpers-isSwitchAccountBootRequest.C3tmXnb7.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-experiments.BdHRV-Vf.js", "/cdn/shopifycloud/checkout-web/assets/c1/shared-receipt-mapper-load-recovery.BiPqFuW0.js", "/cdn/shopifycloud/checkout-web/assets/c1/shared-receipt-eager-mappers.DdCRtyXW.js", "/cdn/shopifycloud/checkout-web/assets/c1/shared-report-graphql-error.BIbaQJ6B.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.CDJVtFmS.js", "/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.K4r9DEFp.js", "/cdn/shopifycloud/checkout-web/assets/c1/redemption-promotions.8MPSgIef.js", "/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.CLYVr7ZJ.js", "/cdn/shopifycloud/checkout-web/assets/c1/hydrate.BcfGVx0L.js", "/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.C-nDEOnn.js", "/cdn/shopifycloud/checkout-web/assets/c1/shared-permissions.B59tuyWB.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.R6pnDxYu.js", "/cdn/shopifycloud/checkout-web/assets/c1/locale-en.DKh4ZMvM.js", "/cdn/shopifycloud/checkout-web/assets/c1/OnePage.BGDrupdB.js", "/cdn/shopifycloud/checkout-web/assets/c1/components-VatNumberValidationField.DqFc8B_9.js", "/cdn/shopifycloud/checkout-web/assets/c1/FormLayout.UkTBTXMZ.js", "/cdn/shopifycloud/checkout-web/assets/c1/amazon-pay-useAmazonPayPaymentLine.X7jqQiq6.js", "/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.C6ri8rG_.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-stable-ref.dCtJn23l.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealCustomization.djt7DCHB.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.JfumpHY0.js", "/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.DXURX0D_.js", "/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.B1Xpg2b3.js", "/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.rAEISard.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.Cvo-K0z2.js", "/cdn/shopifycloud/checkout-web/assets/c1/Popover.ZkMcWGfE.js", "/cdn/shopifycloud/checkout-web/assets/c1/Choice.D9vYH2mX.js", "/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.CdJzVizb.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail.B1-OWrOB.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.D2iKuiAK.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.ByRalZ9t.js", "/cdn/shopifycloud/checkout-web/assets/c1/CalloutHeader.DC7jgv42.js", "/cdn/shopifycloud/checkout-web/assets/c1/Monorail-monorailMetric-wallets.D__Peh7l.js", "/cdn/shopifycloud/checkout-web/assets/c1/PayButton-helpers.DGMbMyz3.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.DrmS3FLj.js", "/cdn/shopifycloud/checkout-web/assets/c1/crypto-constants.Ca3tBkwm.js", "/cdn/shopifycloud/checkout-web/assets/c1/localization-index.C3Jg94aR.js", "/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks.BVR78hJy.js", "/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.CdNufRZ0.js", "/cdn/shopifycloud/checkout-web/assets/c1/TransitionHeight.Bhh9D1te.js", "/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.By5FDG3b.js", "/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.D432iDGV.js", "/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.Df_TeLYl.js", "/cdn/shopifycloud/checkout-web/assets/c1/Switch.Bbq5KJxf.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.D9pamPKR.js", "/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.BIr_RXis.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.-ypvsmSq.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.HSjRrKhm.js", "/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.CSLUDabY.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.C4NXzSJo.js", "/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.emSKnIpm.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.DJVsS6aH.js", "/cdn/shopifycloud/checkout-web/assets/c1/Section.J2ZFesxe.js", "/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod.C8W7wTVp.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.CtzH3JZS.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.DLzmknw2.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.DawjANz2.js", "/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay.DVQDcxt_.js", "/cdn/shopifycloud/checkout-web/assets/c1/Middot.D2IL0UWw.js", "/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.DhMNjS2y.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.D5IEFYQ5.js", "/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.Cuff-UKu.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.NY3LUGeY.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BDcVtteK.js", "/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.BklvgDzs.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.-a4_WS5F.js", "/cdn/shopifycloud/checkout-web/assets/c1/TextArea.CCo8tV-a.js", "/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CM5nh0C1.js", "/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module.CrRh0Cus.js", "/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.CuwJUXzV.js", "/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.ghWfk312.js", "/cdn/shopifycloud/checkout-web/assets/c1/Captcha.FpS8EQr6.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.D1P4QA8k.js", "/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.BYeMmxbw.js", "/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost.6RPZ-76L.js", "/cdn/shopifycloud/checkout-web/assets/c1/stopwatch.B56VZk5r.js", "/cdn/shopifycloud/checkout-web/assets/c1/component-MobileOrderSummary.BDntaiIY.js", "/cdn/shopifycloud/checkout-web/assets/c1/styles-floating-layer.module.CZ3-lUNr.js", "/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DnKXdf2M.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DF7tbJ-4.js", "/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.DYEnoPXY.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.CthkuMM5.js", "/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.CcWBqd3Y.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.CidTc5Dm.js", "/cdn/shopifycloud/checkout-web/assets/c1/extensibility-browser-engine.dl81bh8K.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors.BbHw1F9O.js", "/cdn/shopifycloud/checkout-web/assets/c1/performance-index.mu6MOGR9.js", "/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.RXK1z9Hb.js", "/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.D6NvLkrc.js", "/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.C2AR34tD.js", "/cdn/shopifycloud/checkout-web/assets/c1/QRCode.Dq91AK4b.js", "/cdn/shopifycloud/checkout-web/assets/c1/Pressable.ChoeO1LE.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates.ChO2GdxN.js", "/cdn/shopifycloud/checkout-web/assets/c1/NumberField.9L3K4XMZ.js", "/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.Ca77wI-c.js", "/cdn/shopifycloud/checkout-web/assets/c1/EmailField.DprXO6cp.js", "/cdn/shopifycloud/checkout-web/assets/c1/Sheet.CBSPD0rO.js", "/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.up2ahoGo.js", "/cdn/shopifycloud/checkout-web/assets/c1/dist-v4.EwEgHOG0.js", "/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.C7vnOcET.js", "/cdn/shopifycloud/checkout-web/assets/c1/adapter-host.DP8Mz1Yh.js", "/cdn/shopifycloud/checkout-web/assets/c1/sandbox.BHWel2fs.worker.js", "/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.D1aPqhNY.worker.js", "https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.DCV3miiE.worker.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BuSMBobh.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/previous.DjvIwnbB.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BduNPqpW.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.CyiectWG.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.DV6JSDrR.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/constants.Dlnp55te.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/FormLayout.CFj15lwv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CmuzzmSI.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.Bi0nhBOp.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.Cu93j1K1.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.CKE1iCma.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Checkbox.SrYMuQu4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/CalloutHeader.BxwwfmsJ.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/floating-layer.DfWUBaTh.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.D2R3fBzd.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Pressable.D9SfDfsb.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.CpR5hiDV.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0250/3395/files/Screen_Shot_2024-07-30_at_12.04.01_PM_x320.png?v=1722359012"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();