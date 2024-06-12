// components/KeitaroScript.js
import React, { useEffect } from 'react';

const KeitaroScript = ({ setClickId }) => {
  useEffect(() => {
    console.log('Adding Keitaro script...');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfalp2YnhCdDRoWUtmSmprTCc7CiAgICBpZiAoIXdpbmRvdy5falp2YnhCdDRoWUtmSmprTCkgewogICAgICAgIHdpbmRvdy5falp2YnhCdDRoWUtmSmprTCA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly9hbmRlcGUuc3RvcmUvWVpDWXd5WkonLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfNjRLMjVZbnA4aHZkbTNOVCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgXzY0SzI1WW5wOGh2ZG0zTlQgIT09ICd1bmRlZmluZWQnICYmIF82NEsyNVlucDhodmRtM05UICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9uQ3RZcGZoNE15RjZ0MWs4ID0gSlNPTi5wYXJzZShfNjRLMjVZbnA4aHZkbTNOVCk7CiAgICAgICAgdmFyIF9zRktSZm1WejM4NFc3Qk1YID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX25DdFlwZmg0TXlGNnQxazguY3JlYXRlZF9hdCArIHdpbmRvdy5falp2YnhCdDRoWUtmSmprTC50dGwgPCBfc0ZLUmZtVnozODRXN0JNWCkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3ViSWQnLCBfblN1YklkKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX21rV202QnY1NmJQVmo1WlAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfTDZGREd5WHdyZ1BKOXdScSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF85TEpKZDlZOTNZTmprcnNwID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfOUxKSmQ5WTkzWU5qa3JzcCArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfOUxKSmQ5WTkzWU5qa3JzcCArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF85TEpKZDlZOTNZTmprcnNwICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF85TEpKZDlZOTNZTmprcnNwICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfOUxKSmQ5WTkzWU5qa3JzcCArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfOUxKSmQ5WTkzWU5qa3JzcCArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX2padmJ4QnQ0aFlLZkpqa0wuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX21rV202QnY1NmJQVmo1WlAgIT09ICd1bmRlZmluZWQnICYmIF9ta1dtNkJ2NTZiUFZqNVpQICYmIHdpbmRvdy5falp2YnhCdDRoWUtmSmprTC51bmlxdWUpIHsKICAgICAgICBfOUxKSmQ5WTkzWU5qa3JzcCArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9ta1dtNkJ2NTZiUFZqNVpQKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX0w2RkRHeVh3cmdQSjl3UnEgIT09ICd1bmRlZmluZWQnICYmIF9MNkZER3lYd3JnUEo5d1JxICYmIHdpbmRvdy5falp2YnhCdDRoWUtmSmprTC51bmlxdWUpIHsKICAgICAgICBfOUxKSmQ5WTkzWU5qa3JzcCArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX0w2RkRHeVh3cmdQSjl3UnEpOwogICAgfQogICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICAgICAgICBhLnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7CiAgICAgICAgYS5zcmMgPSB3aW5kb3cuX2padmJ4QnQ0aFlLZkpqa0wuUl9QQVRIICsgXzlMSkpkOVk5M1lOamtyc3A7CiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTsKICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgcyk7CiAgICB9KSgpOwogICAg';

    script.onload = () => {
        if (window._QtwMT2SmN52kMZTV && typeof window._QtwMT2SmN52kMZTV.getSubId === 'function') {
          const clickId = window._QtwMT2SmN52kMZTV.getSubId(); // Отримуємо Click ID із скрипта
          setClickId(clickId);
        } else {
          console.log('Keitaro object or getSubId function not found.');
        }
      };
  
      document.body.appendChild(script);
    }, [setClickId]);
  
    return null;
  };
  
  export default KeitaroScript;